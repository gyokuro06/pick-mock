<script setup lang='ts'>
import RegisterDetailAddressTemplate from '../templates/RegisterDetailAddressTemplate.vue';

</script>

<template>
  <div class="register-delivery-dest-detail-page">
    <RegisterDetailAddressTemplate
      :headerTitle="'配送先を登録する'"
      :destLabel="'配送先'"
      :contactPersonLabel="'配送先担当者のお名前（ひらがな）'"
      :gobackTo="'/order/dest'">
    </RegisterDetailAddressTemplate>
  </div>
  <!-- /.register-delivery-dest-detail-page -->
</template>

<style scoped>
</style>