<script setup lang='ts'>
import { useRouter } from 'vue-router';
import Header from '../components/molecules/Header.vue';
import Button from '../components/atoms/Button.vue';
import OrderStep from '../components/molecules/OrderStep.vue';

const router = useRouter()
const onGoback = () => router.push('/')
const onClickRefrigeratorCarTypeButton = () => router.push('/order/car')
const onClickPickupLocationButton = () => router.push('/order/pickup')
const onClickDeliveryDestButton = () => router.push('/order/dest')
const onClickOrderButton = () => router.push('/')
</script>

<template>
  <div class="delivery-order-page">
    <Header :showGoback='true' @goback="onGoback">配送を依頼する</Header>
    <main class="delivery-order">
      <div class="refrigerator-car-type-step-wrapper">
        <OrderStep @click="onClickRefrigeratorCarTypeButton">
          <template #label>ステップ1 冷凍車の種別を選択</template>
          <template #button-label>冷凍車の種別を選択する</template>
        </OrderStep>
      </div>
      <!-- /.refrigerator-car-type-step-wrapper -->
      <div class="pickup-location-step-wrapper">
        <OrderStep @click="onClickPickupLocationButton">
          <template #label>ステップ2 集荷先を指定</template>
          <template #button-label>集荷先を指定する</template>
        </OrderStep>
      </div>
      <!-- /.pickup-location-step-wrapper -->
      <div class="delivery-dest-step-wrapper">
        <OrderStep @click="onClickDeliveryDestButton">
          <template #label>ステップ3 配送先を指定</template>
          <template #button-label>配送先を指定する</template>
        </OrderStep>
      </div>
      <!-- /.delivery-dest-step-wrapper -->
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
.refrigerator-car-type-step-wrapper,
.pickup-location-step-wrapper,
.delivery-dest-step-wrapper {
  margin: 1em;
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