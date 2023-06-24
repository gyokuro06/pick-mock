<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../atoms/Button.vue';
import DatePicker from '../molecules/DatePicker.vue';
import Header from '../molecules/Header.vue';
import InputWithLabel from '../molecules/InputWithLabel.vue';
import TextInput from '../atoms/TextInput.vue';
import TextArea from '../atoms/TextArea.vue';

const pickupDate = ref(new Date())
const deliveryDate = ref(new Date())
const deliveryContents = ref('')
const message = ref('')

const router = useRouter();
const onGoback = () => router.push('/order')
const onClickDecideButton = () => router.push('/')
</script>

<template>
  <div class="schedule-pick-page">
    <Header :show-goback="true" @goback="onGoback">集荷日時を選択する</Header>
    <main class="schedule-pick">
      <div class="pickup-datetime-selector">
        <InputWithLabel :label="'集荷希望日時'" :required="true">
          <DatePicker class="pickup-datetime-selector__datepicker" v-model="pickupDate"></DatePicker>
        </InputWithLabel>
      </div>
      <!-- /.pickup-datetime-selector -->
      <div class="delivery-datetime-selector">
        <InputWithLabel :label="'配送希望日時'" :required="true">
          <DatePicker class="delivery-datetime-selector__datepicker" v-model="deliveryDate"></DatePicker>
        </InputWithLabel>
      </div>
      <!-- /.delivery-datetime-selector -->
      <div class="delivery-contents">
        <InputWithLabel :label="'配送物'" :required="true">
          <TextInput v-model="deliveryContents" :placeholder="'例：ダンボール5個、１人用ソファー１台'"></TextInput>
        </InputWithLabel>
      </div>
      <!-- /.delivery-contents -->
      <div class="message">
        <InputWithLabel :label="'配送ドライバーへの伝達事項'">
          <TextArea
            class="message_input"
            v-model="message"
            :placeholder="'例：ダンボールは180サイズ（幅62×奥行62×高さ50cm）、1人用ソファは80×80×90cm程度です。エレベーターはありません。'">
          </TextArea>
        </InputWithLabel>
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
.schedule-pick {
  margin: 0 3rem;
}
.pickup-datetime-selector,
.delivery-datetime-selector,
.delivery-contents,
.message {
  margin: 0 0 1rem 0;
}
.delivery-contents__input {
  border-radius: 3px;
}
.shedule-pick-footer__decide-button-wrapper {
  width: 90%;
  margin: 0 3rem;
}
</style>