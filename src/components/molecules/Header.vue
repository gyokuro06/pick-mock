<script setup lang='ts'>
import { ChevronLeftIcon } from '@heroicons/vue/24/solid';

defineProps({
  showGoback: {
    type: Boolean,
    default: false,
  }
})
defineEmits(['goback'])

</script>

<template>
  <header class="header">
    <ChevronLeftIcon
      class="header__go-back h-6 w-6 border-gray-500"
      @click="$emit('goback')"
      v-if="showGoback">
    </ChevronLeftIcon>
    <div class="header__title">
      <slot></slot>
    </div>
    <!-- /.header__title -->
  </header>
</template>

<style scoped>
.header {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  align-items: center;
}
.header__go-back {
  cursor: pointer;
}
.header__title {
  flex-grow: 1;
  font-weight: bold;
  font-size: 1.1em;
}
</style>