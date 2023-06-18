<script setup lang='ts'>
import AddressSelectorWithMapTemplate from '../templates/AddressSelectorWithMapTemplate.vue';

</script>

<template>
  <div class="pickup-location-selector-page">
    <AddressSelectorWithMapTemplate
      :next="'/order/dest/detail'"
      :title="'配送先を指定'">
    </AddressSelectorWithMapTemplate>
  </div>
  <!-- /.pickup-location-selector-page -->
</template>

<style scoped>

</style>