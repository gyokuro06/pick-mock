import { Address, Country, ZipCode } from '../domain/address';
import { Geocode, getGeocodes } from "../driver/googleMapsApi";

export const getAddressByQuery = async (query: string) => {
    const geocodes = await getGeocodes(query)
    if (!geocodes) return []
    return geocodes.map(gc => convertGeocodeToAddress(gc))
}

const addressComponentsFilter = (gc: Geocode, type: string) =>
    gc.address_components.filter(ac => ac.types.includes(type))
const extractCountry = (gc: Geocode): Country => {
    const country = addressComponentsFilter(gc, 'country')[0]?.short_name ?? ''
    switch(country) {
        case 'JP': return 'JP'
        default: return undefined
    }
}
const extractZipCode = (gc: Geocode) => {
    const zipCode = addressComponentsFilter(gc, 'postal_code')[0]?.short_name ?? ''
    return ZipCode.of(zipCode)
}
const extractPrefecture = (gc: Geocode) => {
    return addressComponentsFilter(gc, 'administrative_area_level_1')[0]?.long_name ?? ''
}
const extractCity = (gc: Geocode) => {
    const county = addressComponentsFilter(gc, 'administrative_area_level_2')[0]?.long_name ?? ''
    const city =  addressComponentsFilter(gc, 'locality')[0]?.long_name ?? ''
    const subcity1 = addressComponentsFilter(gc, 'sublocality_level_1')[0]?.long_name ?? ''
    const subcity2 = addressComponentsFilter(gc, 'sublocality_level_2')[0]?.long_name ?? ''
    const subcity3 = addressComponentsFilter(gc, 'sublocality_level_3')[0]?.long_name ?? ''
    const subcity4 = addressComponentsFilter(gc, 'sublocality_level_4')[0]?.long_name ?? ''
    return county + city + subcity1 + subcity2 + subcity3 + subcity4
}
const extractStreetAddress = (gc: Geocode) => {
    return addressComponentsFilter(gc, 'premise')[0]?.long_name
}
const convertGeocodeToAddress = (geocode: Geocode): Address => {
    const country = extractCountry(geocode)
    const zipCode = extractZipCode(geocode)
    const prefecture = extractPrefecture(geocode)
    const city = extractCity(geocode)
    const streetAddress = extractStreetAddress(geocode)
    return {
        country,
        zipCode,
        prefecture,
        city,
        streetAddress
    }
}
