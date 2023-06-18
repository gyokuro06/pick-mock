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

export const getGeocodes = async (query: string): Promise<GeocodesResponse | undefined> => {
  const params = new URLSearchParams({
    address: query,
    key: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    language: 'ja'
  })
  const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?' + params.toString())
  if (!response.ok) {
    console.error(`fetch failed. (statusCode: ${response.status}, statusText: ${response.statusText})`)
    return
  }

  const json = await response.json()
  if (json.status !== 'OK') {
    console.error(`status: ${json.status}`)
    console.error(`error message: ${json.error_message}`)
    return
  }
  return json.results.map((r: any) => ({
    address_components:  r.address_components,
    geometry: r.geometry
  }))
}

export const initLoadMap = (
  element: HTMLElement,
  options: google.maps.MapOptions = defaultGoogleMapOptions
) => {
  googleMapLoader
    .importLibrary('maps')
    .then(({ Map }) => {
      new Map(element, options)
    })
    .catch((e) => console.error(e))
}

export const getMap = (
  element: HTMLElement,
  options: google.maps.MapOptions = defaultGoogleMapOptions
) => {
  return new google.maps.Map(element, options)
}

export const setMarker = (
  position: google.maps.LatLng|google.maps.LatLngLiteral,
  map: google.maps.Map
) => {
  new google.maps.Marker({
    position,
    map,
  })
}

export type AddressComponent = {
  long_name: string,
  short_name: string,
  types: string[]
}
export type Location = {
  lat: number,
  lng: number
}
export type Geometry = {
  location: Location
}
export type Geocode = {
  address_components: AddressComponent[],
  geometry: Geometry
}
export type GeocodesResponse = Geocode[]
