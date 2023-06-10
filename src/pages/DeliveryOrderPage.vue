<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { ChevronLeftIcon } from '@heroicons/vue/24/solid';

const router = useRouter()
const onClickGoBackIcon = () => router.push('/')
const onClickPickupLocationButton = () => router.push('/order/pickup')
const onClickDeliveryDestButton = () => router.push('/order/dest')
</script>

<template>
  <div class="delivery-order-page">
    <header class="delivery-order-header">
      <ChevronLeftIcon class="go-back-icon__img h-6 w-6" @click="onClickGoBackIcon"></ChevronLeftIcon>
      <div class="delivery-order-header__title">
        配送を依頼する
      </div>
      <!-- /.delivery-order-header__title -->
    </header>
    <main class="delivery-order">
      <div class="input-pickup-location-step border-blue-500">
        <div class="input-pickup-location-step__label">
          ステップ1 集荷先を指定
        </div>
        <!-- /.input-pickup-location-step__label -->
        <button
          class="input-pickup-location-step__btn bg-blue-500 hover:bg-blue-400"
          @click="onClickPickupLocationButton"
        >
          集荷先を指定する
        </button>
      </div>
      <!-- /.input-pickup-location-step -->
      <div class="input-delivery-dest-step border-blue-500">
        <div class="input-delivery-dest-step__label">
          ステップ2 配送先を指定
        </div>
        <!-- /.input-delivery-dest-step__label -->
        <button
          class="input-delivery-dest-step__btn bg-blue-500 hover:bg-blue-400"
          @click="onClickDeliveryDestButton"
        >
          配送先を指定する
        </button>
      </div>
      <!-- /.input-delivery-dest-step -->
    </main>
    <footer class="delivery-order-footer">
      <button class="delivery-order-footer__order-btn bg-blue-500 hover:bg-blue-400">
        配送を依頼する
      </button>
    </footer>
  </div>
  <!-- /.delivery-order-page -->
</template>

<style scoped>
.delivery-order-header {
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
}
.delivery-order-header__title {
  flex-grow: 1;
  font-weight: bold;
  font-size: 1.1em;
}
.go-back-icon__img {
  cursor: pointer;
}
.delivery-order-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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
.delivery-order-footer__order-btn {
  width: 90%;
  padding: 1em 0;
  border-radius: 2em;
  font-weight: bold;
}
</style>