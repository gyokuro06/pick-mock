<script setup lang='ts'>
import { Ref, ref, watchEffect, onMounted } from 'vue';

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

const iconImg: Ref<HTMLElement | undefined> = ref()
const iconImgColorClass = ref('fill-white')
const labelColorClass = ref('text-white')
const onClick = () => {
  console.log('icon clicked.')
}
watchEffect(() => {
  if (!iconImg.value) return;
  iconImg.value
    ?.getElementsByTagName('svg')[0]
    .classList.add(iconImgColorClass.value)
})
onMounted(() => {
  if (!props.active) return;
  iconImgColorClass.value = 'fill-blue-500'
  labelColorClass.value = 'text-blue-500'
})

</script>

<template>
  <label class="icon" @click="onClick">
    <div ref="iconImg" class="icon__img h-6 w-6">
      <slot></slot>
    </div>
    <div :class="['icon__label', {'icon__label--active': active}, labelColorClass]">{{ label }}</div>
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
.icon__label {
  font-size: 0.9em;
  flex-grow: 0.6;
}
.icon__label--active {
  font-weight: bold;
}
</style>