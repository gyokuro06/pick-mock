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
  'bg-blue-500': props.active,
  'hover:bg-blue-400': props.active,
  'bg-gray-500': !props.active
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
</style>