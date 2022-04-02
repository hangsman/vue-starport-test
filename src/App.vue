<script setup lang="ts">
import { ProxyComponent } from '~/components/StarportCounter'
</script>

<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
  </main>
  <ProxyComponent />
</template>
