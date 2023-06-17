<script setup lang='ts'>
import { useRouter } from 'vue-router';
import Header from '../molecules/Header.vue';
import CarType from '../molecules/CarType.vue';

const router = useRouter()
const onGoback = () => router.push('/order')
const onClickCarType = () => router.push('/order')
</script>

<template>
  <Header :showGoback="true" @goback="onGoback">冷凍車を選択する</Header>
  <main class="refrigerator-car-type-pick">
    <div class="refrigerator-car-type-pick__light-car-wrapper">
      <CarType
        :name="'軽車両'"
        :speed="'最速'"
        :loadCapacity="'130×180×120cm'"
        :maxCapacity="'350kg'"
        :account="8190"
        :perDistance="22.0"
        :perMinTime="51"
        @click="onClickCarType"
        ></CarType>
    </div>
    <!-- /.refrigerator-car-type-pick__light-car-wrapper -->
    <div class="refrigerator-car-type-pick__light-car-wrapper">
      <CarType
        :name="'軽車両'"
        :speed="'最速'"
        :loadCapacity="'130×180×120cm'"
        :maxCapacity="'350kg'"
        :account="8190"
        :perDistance="22.0"
        :perMinTime="51"
        @click="onClickCarType"
        ></CarType>
    </div>
    <!-- /.refrigerator-car-type-pick__light-car-wrapper -->
    <div class="refrigerator-car-type-pick__light-car-wrapper">
      <CarType
        :name="'軽車両'"
        :speed="'最速'"
        :loadCapacity="'130×180×120cm'"
        :maxCapacity="'350kg'"
        :account="8190"
        :perDistance="22.0"
        :perMinTime="51"
        @click="onClickCarType"
        ></CarType>
    </div>
    <!-- /.refrigerator-car-type-pick__light-car-wrapper -->
  </main>
</template>

<style scoped>
.refrigerator-car-type-pick__light-car-wrapper {
  margin: 1rem 3rem;
}
</style>