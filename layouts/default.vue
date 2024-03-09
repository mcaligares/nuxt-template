<script setup lang="ts">
  import AppFooter from '~/components/footer/AppFooter.vue';
  import AppHeader from '~/components/header/AppHeader.vue';
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <slot></slot>
    <AppFooter />
  </div>
</template>

<style lang="scss">
  .app-layout {
    width: 100%;
  }
</style>
