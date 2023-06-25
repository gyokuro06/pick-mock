import { Address, Country, ZipCode } from '../domain/address';
import { GoogleMapState } from '../domain/googleMap';
import { getGeocodesByLatLng, getGeocodesByQuery, loadMap, setMarker } from "../driver/googleMapsApi";

export const loadDefaultMap = async (element: HTMLElement): Promise<GoogleMapState> => {
    return {
        map: await loadMap(element),
        marker: null
    }
}
// export const initMap = async (element: HTMLElement, mapState?: GoogleMapState) => {
//     if (mapState) return;
//     mapState = {
//         map: await loadMap(element),
//         markers: []
//     }
//     mapState.map.addListener('click', (e: google.maps.MapMouseEvent) => {
//         console.log('map clicked. markers.length: ' + mapState?.markers.length + ', markers:' +  mapState?.markers.map(m => m.getPosition()))
//         addMarker(mapState!, e.latLng!)
//         panToAndZoomMap(mapState!, e.latLng!, 14)
//     })
//     return mapState
// }

export const getAddressByQuery = async (query: string) => {
    const geocodes = await getGeocodesByQuery(query)
    return geocodes.map(gc => convertGeocodeToAddress(gc))
}

export const getAddressByPosition = async (position: google.maps.LatLng|google.maps.LatLngLiteral) => {
    const geocodes = await getGeocodesByLatLng(position)
    return geocodes.map(gc => convertGeocodeToAddress(gc))
}

export const getMapWithMarker = (mapState: GoogleMapState, options?: google.maps.MapOptions) => {
    if (options) mapState.map.setOptions(options)
    addMarker(mapState, options?.center ?? undefined)
    return mapState
}
const addMarker = (ms: GoogleMapState, latlng?: google.maps.LatLng|google.maps.LatLngLiteral) => {
    console.log(`${ms} + ${latlng}`)
}

export const getMarker = (
    mapState: GoogleMapState,
    latLng?: google.maps.LatLng|google.maps.LatLngLiteral
): google.maps.Marker => {
    return setMarker(mapState.map, latLng)
}
const addressComponentsFilter = (gc: google.maps.GeocoderResult, type: string) =>
    gc.address_components.filter(ac => ac.types.includes(type))
const extractCountry = (gc: google.maps.GeocoderResult): Country => {
    const country = addressComponentsFilter(gc, 'country')[0]?.short_name ?? ''
    switch(country) {
        case 'JP': return 'JP'
        default: return undefined
    }
}
const extractZipcode = (gc: google.maps.GeocoderResult) => {
    const zipCode = addressComponentsFilter(gc, 'postal_code')[0]?.short_name ?? ''
    return ZipCode.of(zipCode)
}
const extractPrefecture = (gc: google.maps.GeocoderResult) => {
    return addressComponentsFilter(gc, 'administrative_area_level_1')[0]?.long_name ?? ''
}
const extractCity = (gc: google.maps.GeocoderResult) => {
    const county = addressComponentsFilter(gc, 'administrative_area_level_2')[0]?.long_name ?? ''
    const city =  addressComponentsFilter(gc, 'locality')[0]?.long_name ?? ''
    const subcity1 = addressComponentsFilter(gc, 'sublocality_level_1')[0]?.long_name ?? ''
    const subcity2 = addressComponentsFilter(gc, 'sublocality_level_2')[0]?.long_name ?? ''
    const subcity3 = addressComponentsFilter(gc, 'sublocality_level_3')[0]?.long_name ?? ''
    const subcity4 = addressComponentsFilter(gc, 'sublocality_level_4')[0]?.long_name ?? ''
    return county + city + subcity1 + subcity2 + subcity3 + subcity4
}
const extractStreetAddress = (gc: google.maps.GeocoderResult) => {
    return addressComponentsFilter(gc, 'premise')[0]?.long_name
}
const convertLatLngToGeometory = (gc: google.maps.GeocoderResult) => {
    return {
        lat: gc.geometry.location.lat(),
        lng: gc.geometry.location.lng()
    }
}
const convertGeocodeToAddress = (geocode: google.maps.GeocoderResult): Address => {
    const country = extractCountry(geocode)
    const zipcode = extractZipcode(geocode)
    const prefecture = extractPrefecture(geocode)
    const city = extractCity(geocode)
    const streetAddress = extractStreetAddress(geocode)
    const geometry = convertLatLngToGeometory(geocode)
    return new Address(country, prefecture, city, geometry, zipcode, streetAddress)
}
