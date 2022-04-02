import type { DefineComponent, StyleValue } from 'vue'
import { Teleport, h } from 'vue'

export const createStarport = (component: DefineComponent<{}, {}, any>) => {
  const containerRef = ref<HTMLElement>()
  const { top, left } = useElementBounding(containerRef)
  const isFly = ref(true)
  const attrs = ref<any>(null)

  const ContainerComponent = defineComponent({
    setup(props, ctx) {
      onBeforeUnmount(() => {
        isFly.value = true
      })
      attrs.value = ctx.attrs
      return () => h('div', { ref: containerRef, id: 'container' })
    },
  })
  const ProxyComponent = defineComponent({
    setup() {
      const disabled = ref(true)
      const router = useRouter()
      const cleanRouterGuard = router.beforeEach(async() => {
        isFly.value = true
        await nextTick()
        console.log('起飞')
      })
      onMounted(() => {
        disabled.value = false
      })
      onBeforeUnmount(() => {
        cleanRouterGuard()
      })
      const getStyle = $computed(() => {
        return {
          position: 'fixed',
          transition: 'all 800ms ease-in-out 0s',
          left: `${left.value}px`,
          top: `${top.value}px`,
          display: isFly.value ? 'block' : 'none',
        } as StyleValue
      })
      return () => {
        return h('div', {
          style: getStyle,
          onTransitionend: async() => {
            await nextTick()
            isFly.value = false
            console.log('降落')
          },
        }, h(Teleport,
          { to: isFly.value ? 'body' : '#container', disabled: isFly.value },
          h(component, { ...attrs.value })),
        )
      }
    },
  })
  return {
    ContainerComponent, ProxyComponent,
  }
}
