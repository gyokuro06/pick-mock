<script setup lang='ts'>
import RegisterDetailAddressTemplate from '../templates/RegisterDetailAddressTemplate.vue';

</script>

<template>
  <div class="register-pickup-location-detail-page">
    <RegisterDetailAddressTemplate
      :headerTitle="'集荷先を登録する'"
      :destLabel="'集荷先'"
      :contactPersonLabel="'集荷先担当者のお名前（ひらがな）'"
      :gobackTo="'/order/pickup'">
    </RegisterDetailAddressTemplate>
  </div>
  <!-- /.register-pickup-location-detail-page -->
</template>

<style scoped>
</style>