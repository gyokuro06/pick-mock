<script setup lang='ts'>
import { useRouter } from 'vue-router';
import Header from '../components/molecules/Header.vue';
import Button from '../components/atoms/Button.vue';

const router = useRouter()
const onGoback = () => router.push('/')
const onClickPickupLocationButton = () => router.push('/order/pickup')
const onClickDeliveryDestButton = () => router.push('/order/dest')
const onClickOrderButton = () => router.push('/')
</script>

<template>
  <div class="delivery-order-page">
    <Header :showGoback='true' @goback="onGoback">配送を依頼する</Header>
    <main class="delivery-order">
      <div class="input-pickup-location-step border-blue-500">
        <div class="input-pickup-location-step__label">
          ステップ1 集荷先を指定
        </div>
        <!-- /.input-pickup-location-step__label -->
        <div class="pickup-location-button-wrapper">
          <Button @click="onClickPickupLocationButton">集荷先を指定する</Button>
        </div>
      </div>
      <!-- /.input-pickup-location-step -->
      <div class="input-delivery-dest-step border-blue-500">
        <div class="input-delivery-dest-step__label">
          ステップ2 配送先を指定
        </div>
        <!-- /.input-delivery-dest-step__label -->
        <div class="delivery-dest-button-wrapper">
          <Button @click="onClickDeliveryDestButton">配送先を指定する</Button>
        </div>
      </div>
      <!-- /.input-delivery-dest-step -->
    </main>
    <footer class="delivery-order-footer">
      <div class="order-button-wrapper">
        <Button @click="onClickOrderButton">配送を依頼する</Button>
      </div>
    </footer>
  </div>
  <!-- /.delivery-order-page -->
</template>

<style scoped>
.input-pickup-location-step {
  padding: 1em 0.5em;
  margin: 1em;
  border-style: solid;
  border-width: 4px;
  border-radius: 12px;
}
.input-pickup-location-step__label {
  font-size: 1.3em;
  font-weight: bold;
  margin: 0 0 1em 0;
}
.pickup-location-button-wrapper,
.delivery-dest-button-wrapper {
  width: 90%;
  margin: 0 auto;
}
.input-pickup-location-step__btn {
  width: 90%;
  padding: 1em 0;
  border-radius: 2em;
  font-weight: bold;
}
.input-delivery-dest-step {
  padding: 1em 0.5em;
  margin: 0 1em;
  border-style: solid;
  border-width: 4px;
  border-radius: 12px;
}
.input-delivery-dest-step__label {
  font-size: 1.3em;
  font-weight: bold;
  margin: 0 0 1em 0;
}
.input-delivery-dest-step__btn {
  width: 90%;
  padding: 1em 0;
  border-radius: 2em;
  font-weight: bold;
}
.delivery-order-footer {
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.order-button-wrapper {
  width: 90%;
}
</style>