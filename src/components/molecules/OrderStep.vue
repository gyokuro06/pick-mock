<script setup lang='ts'>
import Button from '../atoms/Button.vue';
defineProps({
  active: {
    type: Boolean,
    default: true
  }
})
defineEmits(['click'])
</script>

<template>
  <div class="order-step">
    <div class="order-step__label">
      <slot name="label"></slot>
    </div>
    <div class="order-step__button-wrapper">
      <Button @click="$emit('click')" :active="active">
        <slot name="button-label"></slot>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.order-step {
  padding: 1em 0.5em;
  border: 4px solid var(--blue-500);
  border-radius: 12px;
}
.order-step__label {
  font-size: 1.3em;
  font-weight: bold;
  margin: 0 0 1em 0;
}
.order-step__button-wrapper {
  width: 90%;
  margin: 0 auto;
}
</style>