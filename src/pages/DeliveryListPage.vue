<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ListBulletIcon, UserIcon } from '@heroicons/vue/24/solid'
import Header from '../components/molecules/Header.vue';
import Button from '../components/atoms/Button.vue';

const router = useRouter()
const deliveryList = ref([])

const onClickOrderButton = () => router.push('/order')
</script>

<template>
  <div class="delivery-list-page">
    <Header :showGoback="false">依頼リスト</Header>
    <main class="delivery-list">
      <div class="delivery-list">
        <div class="delivery-list__no-item-msg" v-if="deliveryList.length == 0">
          依頼はありません
        </div>
        <!-- /.delivery-list__no-item-msg -->
        <div class="delivery-list__list" v-else>
          <ul v-for="item in deliveryList">{{ item }}</ul>
        </div>
        <!-- /.delivery-list__list -->
      </div>
      <!-- /.delivery-list-content__list -->
      <div class="button-wrapper">
        <Button @click="onClickOrderButton">配送を依頼する</Button>
      </div>
    </main>
    <footer class="delivery-list-footer">
      <label class="delivery-list-icon">
        <ListBulletIcon class="delivery-list-icon__img h-6 w-6 fill-blue-500"></ListBulletIcon>
        <div class="delivery-list-icon__label text-blue-500">
          依頼リスト
        </div>
      </label>
      <label class="account-icon">
        <UserIcon class="account-icon__img h-6 w-6"></UserIcon>
        <div class="account-icon__label">
          アカウント
        </div>
      </label>
    </footer>
  </div>
  <!-- /.delivery-list-page -->
</template>

<style scoped>
.delivery-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.delivery-list {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button-wrapper {
  width: 70%;
  margin: 0 0 0.5em 0;
}
.delivery-list-footer {
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.delivery-list-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.delivery-list-icon__label {
  font-size: 0.9em;
  font-weight: bold;
  flex-grow: 0.6;
}
.account-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.account-icon__label {
  font-size: 0.9em;
  flex-grow: 0.6;
}
</style>