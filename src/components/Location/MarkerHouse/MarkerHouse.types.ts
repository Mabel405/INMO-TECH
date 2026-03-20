import { Map } from 'leaflet'

export interface MarkerHouseProps {
    selectMarker: (position: { lat: number, lng: number }, fnMap: Map) => void
    onSelectDistrict: (district: string) => void
}