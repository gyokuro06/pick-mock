<script setup lang='ts'>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { Ref, computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Address } from '../../domain/address';
import { GoogleMapState } from '../../domain/googleMap';
import { getAddressByPosition, getAddressByQuery, getMapWithMarker, getMarker } from '../../gateway/addressGateway';
import { initMap } from '../../usecase/initMapUsecase';
import Button from '../atoms/Button.vue';
import Header from '../molecules/Header.vue';

const props = defineProps({
  next: {
    type: String,
    default: '/error'
  },
  title: {
    type: String,
    default: 'title'
  }
})

const router = useRouter()
const onGoback = () => router.push('/order')
const onClickNextStepButton = () => router.push(props.next)

const mapDiv = ref(document.getElementById('map')!)
const googleMap = ref<GoogleMapState>()

onMounted(async () => {
  googleMap.value = await initMap(mapDiv.value, googleMap.value)
  googleMap.value.map.addListener('click', async (e: google.maps.MapMouseEvent) => {
    console.log('map clicked.: ' + e.latLng?.toString())
    if (!e.latLng || !googleMap.value) return
    googleMap.value.map.panTo(e.latLng)
    googleMap.value.map.setZoom(14)
    googleMap.value.marker?.setMap(null)
    googleMap.value.marker = getMarker(googleMap.value, e.latLng)
    addresses.length = 0
    const results = await getAddressByPosition(e.latLng)
    results.forEach(r => addresses.push(r))
  })
})

const onClickCurrentLocationButton = () => console.log("current location button clicked.")
const locationSearchForm: Ref<HTMLInputElement | undefined> = ref()
const addresses: Address[] = reactive([])
const stringAddress = computed(() => {
  if (addresses.length === 0) return ''
  getMapWithMarker(googleMap.value!, {
    center: addresses[0].geometry,
    zoom: 16
  })
  return addresses[0].toString()
})
const onKeydownEnterSearchForm = async (e: KeyboardEvent) => {
  if(e.isComposing) return
  searchAddress()
}
const onClickSearchIcon = async () => searchAddress()
const searchAddress = async () => {
  addresses.length = 0
  const results = await getAddressByQuery(locationSearchForm.value!.value)
  results.forEach(r => addresses.push(r))
}
</script>

<template>
  <div class="address-selector-with-map-tempalte">
    <Header :showGoback="true" @goback="onGoback">{{ title }}</Header>
    <main class="address-selector">
      <div class="location-search-form">
        <input
          type="search"
          class="location-search-form__input"
          placeholder="住所を検索する"
          ref="locationSearchForm"
          @keydown.enter="onKeydownEnterSearchForm">
        <MagnifyingGlassIcon
          class="location-search-form__search-img"
          @click="onClickSearchIcon">
        </MagnifyingGlassIcon>
      </div>
      <!-- /.location-search-form -->
      <div class="address-selector__selected-location-display">
        {{ stringAddress }}
      </div>
      <!-- /.address-selector__selected-location-display -->
      <div class="location-select-map">
        <div id="map" ref='mapDiv' class="location-select-map__map"></div>
        <!-- /.location-select-map__map -->
        <div class="current-location-button-wrapper">
          <Button @click="onClickCurrentLocationButton">現在地</Button>
        </div>
        <div class="next-step-button-wrapper">
          <Button @click="onClickNextStepButton">次へ</Button>
        </div>
      </div>
      <!-- /.location-select-map -->
    </main>
  </div>
  <!-- /.address-selector-with-map-tempalte -->
</template>

<style scoped>
.address-selector {
  display: flex;
  flex-direction: column;
}
.location-search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 9rem;
}
.location-search-form__input {
  flex-grow: 1;
  background-color: var(--white);
  border-radius: 8px;
  line-height: 2rem;
  padding: 0 1rem;
  color: var(--black);
}
.location-search-form__input::placeholder {
  color: var(--gray-500);
}
.location-search-form__search-img {
  width: var(--w-1);
  height: var(--h-1);
}
.address-selector__selected-location-display {
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
.next-step-button-wrapper {
  position: absolute;
  z-index: 1;
}
.current-location-button-wrapper {
  top: 1em;
  right: 1em;
}
.next-step-button-wrapper {
  bottom: 1em;
  left: 15%;
  width: 70%;
}
@media (prefers-color-scheme: light) {
  .location-search-form__input {
    background-color: #e9e9ed;
  }
}
</style>