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

export const getGeocodesByQuery = async (query: string): Promise<google.maps.GeocoderResult[]> => {
  const geocoder = new google.maps.Geocoder()
  const response = await geocoder.geocode({
    address: query,
    language: 'ja'
  })

  if (response.results.length === 0) console.error('No results. query: ' + query)

  return response.results
}

export const getGeocodesByLatLng = async (latLng: google.maps.LatLng|google.maps.LatLngLiteral): Promise<google.maps.GeocoderResult[]> => {
  const geocoder = new google.maps.Geocoder()
  const response = await geocoder.geocode({
    location: latLng,
    language: 'ja'
  })

  if (response.results.length === 0) console.error('No results. location: ' + latLng)

  return response.results
}

export const loadMap = async (
  element: HTMLElement,
  options: google.maps.MapOptions = defaultGoogleMapOptions
): Promise<google.maps.Map> => {
  const { Map } = await googleMapLoader.importLibrary('maps') as google.maps.MapsLibrary
  return new Map(element, options)
}

export const getMap = (
  element: HTMLElement,
  options: google.maps.MapOptions = defaultGoogleMapOptions
) => {
  return new google.maps.Map(element, options)
}

export const setMarker = (
  map: google.maps.Map,
  position: google.maps.LatLng|google.maps.LatLngLiteral = defaultGoogleMapOptions.center
):google.maps.Marker => {
  return new google.maps.Marker({
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
