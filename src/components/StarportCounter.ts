import Counter from '~/components/Counter.vue'
import { createStarport } from '~/composables'

export const { ContainerComponent, ProxyComponent } = createStarport(Counter)
