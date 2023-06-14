<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
  active: {
    type: Boolean,
    default: true,
  }
})
defineEmits(['click'])

const buttonClass = computed(() => ({
  'button__btn--active': props.active,
  'button__btn--disable': !props.active,
}))
</script>

<template>
  <div class="button">
    <button :class="['button__btn', buttonClass]" @click="$emit('click')" :disabled="!active">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.button__btn {
  width: 100%;
  padding: 1em 2em;
  border-radius: 32px;
  font-weight: bold;
  margin: 0 auto;
}
.button__btn--disable {
  background-color: var(--gray-500);
}
.button__btn--active {
  background-color: var(--blue-500);
}
.button__btn--active:hover {
  background-color: var(--blue-400);
}
</style>