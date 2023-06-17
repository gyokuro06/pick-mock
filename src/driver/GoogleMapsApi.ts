import { Loader } from '@googlemaps/js-api-loader';

const googleMapLoader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  version: 'weekly',
  libraries: [],
  language: 'ja'
})

const defaultGoogleMapOptions = {
  center: {
    lat: 35.6682156,
    lng: 139.6584685,
  },
  zoom: 10
}

export const getMap =
  (element: HTMLElement,
   options: google.maps.MapOptions = defaultGoogleMapOptions) => {
  googleMapLoader
    .importLibrary('maps')
    .then(({ Map }) => {
      new Map(element, options)
    })
    .catch((e) => console.error(e))
}