<script setup lang='ts'>
import { ref, watch } from 'vue';

defineProps<{
  modelValue: string,
  cols?: number,
  rows?: number,
  placeholder: string,
}>()
const emits = defineEmits(['update:modelValue'])

const textAreaValue = ref('')
watch(textAreaValue, () => {
  emits('update:modelValue', textAreaValue.value)
})
</script>

<template>
  <div class="text-area">
    <textarea
      class="text-area__textarea"
      v-model="textAreaValue"
      :cols="cols ?? 30"
      :rows="rows ?? 10"
      :placeholder="placeholder">
    </textarea>
  </div>
  <!-- /.text-area -->
</template>

<style scoped>
.text-area__textarea {
  width: 100%;
  border-radius: 8px;
  line-height: 1.2rem;
  padding: 0.5rem;

}
</style>