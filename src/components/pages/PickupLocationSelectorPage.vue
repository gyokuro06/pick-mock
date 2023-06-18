<script setup lang='ts'>
import AddressSelectorWithMapTemplate from '../templates/AddressSelectorWithMapTemplate.vue';

</script>

<template>
  <div class="pickup-location-selector-page">
    <AddressSelectorWithMapTemplate
      :next="'/order/pickup/detail'"
      :title="'集荷先を指定'">
    </AddressSelectorWithMapTemplate>
  </div>
  <!-- /.pickup-location-selector-page -->
</template>

<style scoped>

</style>