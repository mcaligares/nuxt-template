<script setup lang="ts">
  import useAppHeader from './appHeader';

  const { title, menu } = useAppHeader();
</script>

<template>
  <header class="app-header">
    <Menubar :model="menu">
      <template #start>
        <h1 class="app-header__title">
          {{ title }}
        </h1>
      </template>
    </Menubar>
  </header>
</template>

<style lang="scss">
  .app-header {
    width: 100%;
    &__title {
      font-size: 1.5rem;
      margin-block: unset;
      margin-inline: unset;
    }
    .p-menubar {
      border: none;
      .p-menubar-root-list {
        width: 70%;
        justify-content: center;
      }
    }
  }
</style>
./appHeader
