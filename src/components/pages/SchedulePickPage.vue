<script setup lang='ts'>
import { useRouter } from 'vue-router';
import Header from '../molecules/Header.vue';
import Button from '../atoms/Button.vue';
import DatePicker from '../molecules/DatePicker.vue';
import { ref } from 'vue';
import { toFormattedDateTimeString } from '../../utils/date';

const pickupDate = ref(new Date())
const deliveryDate = ref(new Date())
const deliveryContents = ref('')
const message = ref('')

const router = useRouter();
const onGoback = () => router.push('/order')
const onClickDecideButton = () => router.push('')
</script>

<template>
  <div class="schedule-pick-page">
    <Header :show-goback="true" @goback="onGoback">集荷日時を選択する</Header>
    <main class="schedule-pick">
      <div class="pickup-datetime-selector-wrapper">
        <div class="pickup-datetime-selector-wrapper__label">
          集荷希望日時
        </div>
        <!-- /.pickup-datetime-selector-wrapper__label -->
        <DatePicker v-model="pickupDate"></DatePicker>
        {{ toFormattedDateTimeString(pickupDate) }}
      </div>
      <!-- /.pickup-datetime-selector-wrapper -->
      <div class="desire-delivery-datetime-selector-wrapper">
        <div class="desire-delivery-datetime-selector-wrapper__label">
          配送希望日時
        </div>
        <!-- /.desire-delivery-datetime-selector-wrapper__label -->
        <DatePicker v-model="deliveryDate"></DatePicker>
        {{  toFormattedDateTimeString(deliveryDate) }}
      </div>
      <!-- /.desire-delivery-datetime-selector-wrapper -->
      <div class="delivery-contents">
        <div class="delivery-contents__label">
          配送物
        </div>
        <!-- /.delivery-contents__label -->
        <input type="text" class="delivery-contents__input" v-model="deliveryContents" placeholder="例：ダンボール5個、１人用ソファー１台">
      </div>
      <!-- /.delivery-contents -->
      <div class="message">
        <div class="message__label">
          配送ドライバーへの伝達事項
        </div>
        <!-- /.message__label -->
        <textarea class="message_input" v-model="message" cols="30" rows="10" placeholder="例：ダンボールは180サイズ（幅62×奥行62×高さ50cm）、1人用ソファは80×80×90cm程度です。エレベーターはありません。"></textarea>
      </div>
      <!-- /.message -->
    </main>
    <footer class="schedule-pick-footer">
      <div class="shedule-pick-footer__decide-button-wrapper">
        <Button :active="true" @click="onClickDecideButton">
          依頼へ進む
        </Button>
      </div>
      <!-- /.shedule-pick-footer__decide-button-wrapper -->
    </footer>
  </div>
  <!-- /.schedule-pick-page -->
</template>

<style scoped>
.shedule-pick-footer__decide-button-wrapper {
  width: 90%;
}
</style>