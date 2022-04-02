<script setup lang="ts">
import { ContainerComponent } from '~/components/StarportCounter'
const router = useRouter()
const go = () => {
  router.push('/')
}
</script>

<template>
  <div>
    <div>
      <button
        class="m-3 text-sm btn"
        @click="go"
      >
        back
      </button>
    </div>
    <div class="flex w-full item-center">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class=" ml-auto">
        <ContainerComponent class="rounded-1/2 w-300px h-300px" />
      </div>
    </div>
  </div>
</template>
