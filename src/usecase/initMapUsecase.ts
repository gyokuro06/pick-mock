import { GoogleMapState } from "../domain/googleMap"
import { loadDefaultMap } from "../gateway/addressGateway"

export const initMap = async (
    element: HTMLElement,
    mapState?: GoogleMapState
): Promise<GoogleMapState> => {
    if (mapState) return mapState
    return await loadDefaultMap(element)
}