<script setup lang='ts'>
defineEmits(['click'])
</script>

<template>
  <div class="button">
    <button class="button__btn bg-blue-500 hover:bg-blue-400" @click="$emit('click')">
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