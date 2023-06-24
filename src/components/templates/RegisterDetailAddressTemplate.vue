<script setup lang='ts'>
import { useRouter } from 'vue-router';
import Header from '../molecules/Header.vue';
import Button from '../atoms/Button.vue';
import InputWithLabel from '../molecules/InputWithLabel.vue';

const props = defineProps<{
  headerTitle: string,
  destLabel: string,
  contactPersonLabel: string,
  gobackTo: string
}>()

const router = useRouter()
const onGoback = () => router.push(props.gobackTo)
const onClickRegisterButton = () => router.push('/order')
</script>

<template>
  <div class="register-detail-address-template">
    <Header :showGoback="true" @goback="onGoback">{{ headerTitle }}</Header>
    <main class="detail-address-input-form">
      <div class="destination">
        <InputWithLabel :label="destLabel">
          <div class="destination__address">東京都江戸川区北小岩２丁目１９−８</div>
        </InputWithLabel>
      </div>
      <!-- /.destination -->
      <div class="building-and-room">
        <InputWithLabel :label="'建物名・部屋番号'">
          <input type="text" class="building-and-room__address" placeholder="建物名・部屋番号などを入力...">
        </InputWithLabel>
      </div>
      <!-- /.building-and-room -->
      <div class="company-and-department">
        <InputWithLabel :label="'会社・部署名'">
          <input type="text" class="company-and-department__address" placeholder="会社・部署名などを入力...">
        </InputWithLabel>
      </div>
      <!-- /.company-and-department -->
      <div class="contact-person-name">
        <InputWithLabel :label="contactPersonLabel" :required="true">
          <input type="text" class="contact-person-name__address" placeholder="さかもと　りょうま" required>
        </InputWithLabel>
      </div>
      <!-- /.contact-person-name -->
      <div class="tel">
        <InputWithLabel :label="'電話番号'" :required="true">
          <input type="tel" class="tel__address" placeholder="09012345678 ハイフン(-)なし" required>
        </InputWithLabel>
      </div>
      <!-- /.tel -->
    </main>
    <footer class="register-detail-address-footer">
      <div class="register-detail-address-footer__register-button-wrapper">
        <Button @click="onClickRegisterButton">登録する</Button>
      </div>
      <!-- /.register-detail-address-footer__register-button-wrapper -->
    </footer>
  </div>
  <!-- /.register-detail-address-template -->
</template>

<style scoped>
.detail-address-input-form {
  margin: 0 3rem;
}
.destination,
.building-and-room,
.company-and-department,
.contact-person-name,
.tel {
  margin: 0 0 1em;
}
.building-and-room__address,
.company-and-department__address,
.contact-person-name__address,
.tel__address {
  width: 100%;
  height: 3em;
  padding: 0 0 0 0.5em;
  border-radius: 0.5em;
}
.register-detail-address-footer {
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.register-detail-address-footer__register-button-wrapper {
  width: 90%;
}
</style>