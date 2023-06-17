<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ListBulletIcon, UserIcon } from '@heroicons/vue/24/solid'
import Header from '../molecules/Header.vue';
import Button from '../atoms/Button.vue';
import SvgIcon from '../atoms/SvgIcon.vue';

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
      <SvgIcon :label="'依頼リスト'" :active="true">
          <ListBulletIcon class="delivery-list-icon__img"></ListBulletIcon>
      </SvgIcon>
      <SvgIcon :label="'アカウント'" :active="false">
        <UserIcon class="account-icon__img"></UserIcon>
      </SvgIcon>
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
</style>