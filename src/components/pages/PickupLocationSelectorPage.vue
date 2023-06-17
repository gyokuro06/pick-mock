<script setup lang='ts'>
import { Ref, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { getMap } from '../../driver/GoogleMapsApi';
import Header from '../molecules/Header.vue';
import Button from '../atoms/Button.vue';

const router = useRouter()
const onGoback = () => router.push('/order')
const onClickDetailLocationStepButton = () => router.push('/order/pickup/detail')

const mapDiv: Ref<HTMLElement | undefined> = ref()
onMounted(() => {
  getMap(mapDiv.value!)
})

const onClickCurrentLocationButton = () => console.log("current location button clicked.")
</script>

<template>
  <div class="pickup-location-selector-page">
    <Header :showGoback="true" @goback="onGoback">集荷先を指定</Header>
    <main class="pickup-location-selector">
      <div class="location-search-form">
        <input
          type="search"
          class="location-search-form__input focus:ring-blue-500 focus:border-blue-500"
          placeholder="住所を検索する">
        <MagnifyingGlassIcon class="location-search-form__search-img h-6 w-6"></MagnifyingGlassIcon>
      </div>
      <!-- /.location-search-form -->
      <div class="pickup-location-selector__selected-location-display"></div>
      <!-- /.pickup-location-selector__selected-location-display -->
      <div class="location-select-map">
        <div ref='mapDiv' class="location-select-map__map"></div>
        <!-- /.location-select-map__map -->
        <div class="current-location-button-wrapper">
          <Button @click="onClickCurrentLocationButton">現在地</Button>
        </div>
        <div class="detail-location-step-button-wrapper">
          <Button @click="onClickDetailLocationStepButton">次へ</Button>
        </div>
      </div>
      <!-- /.location-select-map -->
    </main>
  </div>
  <!-- /.select-pickup-location-page -->
</template>

<style scoped>
.pickup-location-selector {
  display: flex;
  flex-direction: column;
}
.location-search-form {
  display: flex;
  justify-content: center;
}
.pickup-location-selector__selected-location-display {
  border-radius: 0.5em;
  height: 2em;
}
.location-select-map {
  position: relative;
  flex-grow: 1;
}
.location-select-map__map {
  width: 100%;
  height: 100%;
}
.current-location-button-wrapper,
.detail-location-step-button-wrapper {
  position: absolute;
  z-index: 1;
}
.current-location-button-wrapper {
  top: 1em;
  right: 1em;
}
.detail-location-step-button-wrapper {
  bottom: 1em;
  left: 15%;
  width: 70%;
}
</style>