<script setup lang='ts'>
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: any
  candidates: any[]
  stringfyFn: Function
}>()
const emits = defineEmits(['update:modelValue'])

const selected = ref(props.modelValue)
watch(selected, () => emits('update:modelValue', selected.value))
</script>

<template>
  <div class="pulldown">
    <select class="pulldown__select" v-model="selected">
      <option
        class="pulldown__item"
        :value="item"
        v-for="item in candidates">
        {{ stringfyFn(item) }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.pulldown__select {
  padding: 0.2rem 1rem;
  border-radius: 8px;
}
</style>