<script setup lang='ts'>
import { useRouter } from 'vue-router';
import Header from '../molecules/Header.vue';
import Button from '../atoms/Button.vue';

const router = useRouter()
const onGoback = () => router.push('/order/pickup')
const onClickRegisterButton = () => router.push('/order')
</script>

<template>
  <div class="register-pickup-location-detail-page">
    <Header :showGoback="true" @goback="onGoback">集荷先を登録する</Header>
    <main class="pickup-location-detail-input-form">
      <div class="pickup-location">
        <div class="pickup-location__title">集荷先</div>
        <div class="pickup-location__address">東京都江戸川区北小岩２丁目１９−８</div>
      </div>
      <!-- /.pickup-location -->
      <div class="building-and-room">
        <div class="building-and-room__title">建物名・部屋番号</div>
        <input type="text" class="building-and-room__address" placeholder="建物名・部屋番号などを入力...">
      </div>
      <!-- /.building-and-room -->
      <div class="company-and-department">
        <div class="company-and-department__title">会社・部署名</div>
        <input type="text" class="company-and-department__address" placeholder="会社・部署名などを入力...">
      </div>
      <!-- /.company-and-department -->
      <div class="contact-person-name">
        <div class="contact-person-name__title">
          <span class="contact-person-name__title--required border-red-500">必須</span>
          集荷先担当者のお名前 (ひらがな)
        </div>
        <!-- /.contact-person-name__title -->
        <input type="text" class="contact-person-name__address" placeholder="さかもと　りょうま" required>
      </div>
      <!-- /.contact-person-name -->
      <div class="tel">
        <div class="tel__title">
          <span class="tel__title--required border-red-500">必須</span>
          電話番号
        </div>
        <!-- /.tel__title -->
        <input type="tel" class="tel__address" placeholder="09012345678 ハイフン(-)なし" required>
      </div>
      <!-- /.tel -->
    </main>
    <footer class="register-pickup-location-detail-footer">
      <div class="register-pickup-location-detail-footer__register-button-wrapper">
        <Button @click="onClickRegisterButton">登録する</Button>
      </div>
      <!-- /.register-pickup-location-detail-footer__register-button-wrapper -->
    </footer>
  </div>
  <!-- /.register-pickup-location-detail-page -->
</template>

<style scoped>
.pickup-location-detail-input-form {
  margin: 0 3rem;
}
.pickup-location {
  text-align: left;
  line-height: 3em;
  margin: 0 0 1em;
  overflow-y: scroll;
}
.pickup-location__title {
  font-weight: bold;
}
.building-and-room {
  text-align: left;
  line-height: 3em;
  margin: 0 0 1em;
}
.building-and-room__title {
  font-weight: bold;
}
.building-and-room__address {
  width: 100%;
  height: 3em;
  padding: 0 0 0 0.5em;
  border-radius: 0.5em;
}
.company-and-department {
  text-align: left;
  line-height: 3em;
  margin: 0 0 1em;
}
.company-and-department__title {
  font-weight: bold;
}
.company-and-department__address {
  width: 100%;
  height: 3em;
  padding: 0 0 0 0.5em;
  border-radius: 0.5em;
}
.contact-person-name {
  text-align: left;
  line-height: 3em;
  margin: 0 0 1em;
}
.contact-person-name__title {
  font-weight: bold;
}
.contact-person-name__title--required {
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  padding: 0.2em 0.3em;
}
.contact-person-name__address {
  width: 100%;
  height: 3em;
  padding: 0 0 0 0.5em;
  border-radius: 0.5em;
}
.tel {
  text-align: left;
  line-height: 3em;
  margin: 0 0 1em;
}
.tel__title {
  font-weight: bold;
}
.tel__title--required {
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  padding: 0.2em 0.3em;
}
.tel__address {
  width: 100%;
  height: 3em;
  padding: 0 0 0 0.5em;
  border-radius: 0.5em;
}
.register-pickup-location-detail-footer {
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.register-pickup-location-detail-footer__register-button-wrapper {
  width: 90%;
}
</style>