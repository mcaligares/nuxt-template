<script setup lang="ts">
  import useAppFooter from './useHook';

  const { items, copyright } = useAppFooter();
</script>

<template>
  <footer class="app-footer">
    <p class="app-footer__title">
      {{ copyright }}
    </p>
    <div class="app-footer__contact">
      <a
        v-for="(item, index) of items"
        :key="index"
        :href="item.link"
        target="_blank"
        class="p-button p-button-text app-footer-link"
      >
        <i
          class="app-footer-link__icon pi"
          :class="item.icon"
        ></i>
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
  .app-footer {
    width: 100%;
    &__title {
      font-size: 0.7rem;
      text-align: center;
    }
    &__contact {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 12px;
      .app-footer-link {
        text-decoration: none;
        &__icon {
          font-size: 1.3rem;
        }
      }
    }
  }
</style>
./useHook
