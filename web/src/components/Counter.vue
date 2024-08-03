<template>
  <div class="counter">
    <button type="button" @click="store.commit('increment')">
      count is {{ store.state.count }}
    </button>
    <button type="button" @click="store.commit('reset')">reset count</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../store';

const store = useStore();
</script>

<style lang="scss" scoped>
.counter {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
</style>
