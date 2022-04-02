<script setup lang="ts">
import { ContainerComponent } from '~/components/StarportCounter'
const router = useRouter()
const go = () => {
  router.push('/one')
}
</script>

<template>
  <div>
    <div>
      <button
        class="m-3 text-sm btn"
        @click="go"
      >
        Go
      </button>
    </div>
    <ContainerComponent class="rounded-xl w-300px h-200px" />
  </div>
</template>
