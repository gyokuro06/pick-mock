<script setup lang='ts'>
defineProps<{
  label: string,
  required?: boolean,
}>()
</script>

<template>
  <div class="input-with-label">
    <div class="input-with-label__label">
      <span v-if="required" class="input-with-label__label--required">必須</span>
      {{ label }}
    </div>
    <!-- /.input-with-label__label -->
    <slot></slot>
  </div>
  <!-- /.input-with-label -->
</template>

<style scoped>
.input-with-label {
  text-align: left;
  line-height: 3rem;
}
.input-with-label__label {
  font-weight: bold;
}
.input-with-label__label--required {
  border: 2px solid var(--red-500);
  border-radius: 3px;
  padding: 0.2rem 0.3rem;
  margin: 0 0.2rem 0 0;
}
</style>