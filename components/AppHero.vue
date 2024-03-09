<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>

<template>
  <div class="app-hero">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss">
  $header: 60px;
  $footer: 70px;
  $gap: 20px;

  .app-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    min-height: calc(100vh - $header - $footer - $gap);
  }
</style>
