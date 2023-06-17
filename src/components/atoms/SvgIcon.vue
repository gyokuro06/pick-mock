<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'ラベル',
  },
  active: {
    type: Boolean,
    default: false,
  }
})

const onClick = () => {
  console.log(`${props.label} icon clicked.`)
}
const imgClass = computed(() => ({
  'icon__img--active': props.active,
}))
const labelClass = computed(() => ({
  'icon__label--active': props.active,
}))
</script>

<template>
  <label class="icon" @click="onClick">
    <div :class="['icon__img', imgClass]">
      <slot></slot>
    </div>
    <div :class="['icon__label', labelClass]">{{ label }}</div>
  </label>
</template>

<style scoped>
.icon {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon__img {
  height: var(--h-1);
  width: var(--w-1);
}
.icon__img :slotted(svg) {
  fill: var(--white);
}
.icon__img--active :slotted(svg) {
  fill: var(--blue-500);
}
.icon__label {
  font-size: 0.9em;
  flex-grow: 0.6;
  color: var(--white);
}
.icon__label--active {
  font-weight: bold;
  color: var(--blue-500);
}
</style>