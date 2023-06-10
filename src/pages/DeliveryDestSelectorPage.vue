<script setup lang='ts'>
import { Ref, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ChevronLeftIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { Loader } from '@googlemaps/js-api-loader';

const router = useRouter()
const onClickGoBackIcon = () => router.push('/order')

const googleMapLoader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  version: 'weekly',
  libraries: [],
  language: 'ja'
})
const googleMapOptions = {
  center: {
    lat: 35.6682156,
    lng: 139.6584685,
  },
  zoom: 10
}

const mapDiv: Ref<HTMLElement | undefined> = ref()
onMounted(() => {
  googleMapLoader
    .importLibrary('maps')
    .then(({Map}) => {
      new Map(mapDiv.value!, googleMapOptions)
    })
    .catch((e) => console.error(e))
})

</script>

<template>
  <div class="delivery-dest-selector-page">
    <header class="delivery-dest-selector-header">
      <ChevronLeftIcon class="go-back-icon__img h-6 w-6" @click="onClickGoBackIcon"></ChevronLeftIcon>
      <div class="delivery-dest-selector-header__title">
        配達先を指定
      </div>
      <!-- /.delivery-dest-selector-header__title -->
    </header>
    <main class="delivery-dest-selector">
      <div class="location-search-form">
        <input
          type="search"
          class="location-search-form__input focus:ring-blue-500 focus:border-blue-500"
          placeholder="住所を検索する">
        <MagnifyingGlassIcon class="location-search-form__search-img h-6 w-6"></MagnifyingGlassIcon>
      </div>
      <!-- /.location-search-form -->
      <div class="delivery-dest-selector__selected-location-display"></div>
      <!-- /.delivery-dest-selector__selected-location-display -->
      <div class="location-select-map">
        <div ref='mapDiv' class="location-select-map__map"></div>
        <!-- /.location-select-map__map -->
        <button class="location-select-map__current-location-btn bg-blue-500 hover:bg-blue-400">現在地</button>
        <button class="location-select-map__detail-location-step-btn bg-blue-500 hover:bg-blue-400">次へ</button>
      </div>
      <!-- /.location-select-map -->
    </main>
  </div>
  <!-- /.select-delivery-dest-page -->
</template>

<style scoped>
.delivery-dest-selector-header {
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
}
.delivery-dest-selector-header__title {
  flex-grow: 1;
  font-weight: bold;
  font-size: 1.1em;
}
.delivery-dest-selector {
  display: flex;
  flex-direction: column;
}
.location-search-form {
  display: flex;
  justify-content: center;
}
.delivery-dest-selector__selected-location-display {
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
.location-select-map__current-location-btn {
  position: absolute;
  z-index: 1;
  border-radius: 2em;
  padding: 0.8em 1em;
  top: 1em;
  right: 1em;
}
.location-select-map__detail-location-step-btn {
  position: absolute;
  z-index: 1;
  bottom: 1em;
  left: 15%;
  width: 70%;
  padding: 1em;
  border-radius: 2em;
}
</style>