<script setup lang='ts'>
import { ref, watch } from 'vue';

defineProps<{ modelValue: string, placeholder: string }>()
const emits = defineEmits(['update:modelValue'])

const inputValue = ref('')
watch(inputValue, () => {
  emits('update:modelValue', inputValue.value)
})
</script>

<template>
  <div class="text-input">
    <input type="text" class="text-input__input" v-model="inputValue" :placeholder="placeholder">
  </div>
  <!-- /.text-input -->
</template>

<style scoped>
.text-input__input {
  width: 100%;
  height: 3rem;
  padding: 0 0 0 0.5rem;
  border-radius: 8px;
}
</style>