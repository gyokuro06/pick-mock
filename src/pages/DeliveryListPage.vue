<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ListBulletIcon, UserIcon } from '@heroicons/vue/24/solid'

const router = useRouter()
const deliveryList = ref([])

const onClickOrderButton = () => {
  router.push('/order')
}
</script>

<template>
  <div class="delivery-list-page">
    <header class="delivery-list-header">
      <div class="delivery-list-header__title">
        依頼リスト
      </div>
    </header>
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
      <button class="delivery-list-content__order-btn bg-blue-500 hover:bg-blue-400" @click="onClickOrderButton">
        配送を依頼する
      </button>
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
.delivery-list-header {
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
.delivery-list-header__title {
  font-weight: bold;
  font-size: 1.1em;
}
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
.delivery-list-content__order-btn {
  width: 70%;
  padding: 1em 0;
  border-radius: 2em;
  font-weight: bold;
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