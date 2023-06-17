<script setup lang='ts'>
import { Ref, computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { getMap } from '../../driver/googleMapsApi';
import Header from '../molecules/Header.vue';
import Button from '../atoms/Button.vue';
import { Address } from '../../domain/address';
import { getAddressByQuery } from '../../gateway/addressGateway';

const router = useRouter()
const onGoback = () => router.push('/order')
const onClickDetailLocationStepButton = () => router.push('/order/pickup/detail')

const mapDiv: Ref<HTMLElement | undefined> = ref()
onMounted(() => {
  getMap(mapDiv.value!)
})

const onClickCurrentLocationButton = () => console.log("current location button clicked.")
const locationSearchForm: Ref<HTMLInputElement | undefined> = ref()
const addresses: Address[] = reactive([])
const stringAddress = computed(() => {
  console.log('stringAddress computed.')
  if (addresses.length === 0) return ''
  const zipcode = addresses[0].zipCode?.zipcode ?? ''
  console.log('page zipcode: ' + zipcode)
  const prefecture = addresses[0].prefecture ?? ''
  console.log('page pref: ' + prefecture)
  const city = addresses[0].city ?? ''
  console.log('page city: ' + city)
  const streetAddress = addresses[0].streetAddress ?? ''
  console.log('page streetAddress: ' + streetAddress)
  return zipcode + ' ' + prefecture + city + streetAddress
})
const onKeydownEnterSearchForm = async (e: KeyboardEvent) => {
  if(e.isComposing) return
  searchAddress()
}
const onClickSearchIcon = async () => searchAddress()
const searchAddress = async () => {
  addresses.pop()
  addresses.unshift((await getAddressByQuery(locationSearchForm.value!.value))[0])
}
</script>

<template>
  <div class="pickup-location-selector-page">
    <Header :showGoback="true" @goback="onGoback">集荷先を指定</Header>
    <main class="pickup-location-selector">
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
      <div class="pickup-location-selector__selected-location-display">
        {{ stringAddress }}
      </div>
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