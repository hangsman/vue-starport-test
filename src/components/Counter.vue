<script setup lang="ts">
const count = $ref(0)
onMounted(() => {
  console.log('Counter mounted')
})
onBeforeUnmount(() => {
  console.log('Counter before unmount')
})
</script>

<template>
  <div class="relative select-none overflow-hidden" v-bind="$attrs" style="transition: all 800ms ease-in-out 0s;" @click="count+=1">
    <img class="object-cover w-full h-full block" src="https://picsum.photos/id/1003/300/200" alt="">
    <div class="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-black:40 to-transparent text-white font-mono flex items-center justify-center text-50px">
      {{ count }}
    </div>
  </div>
</template>
