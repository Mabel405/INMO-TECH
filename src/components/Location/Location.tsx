"use client"
import { Map } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Transition } from '../Transition'
import { MarkerHouse } from './MarkerHouse'

interface LocationProps {
    onSelectDistrict: (district: string) => void
}

export function Location({ onSelectDistrict }: LocationProps) {
    const coordinatePoint = {
        lat: -12.1100,
        lng: -77.0200
    }

    const centerMarker = (position: { lat: number, lng: number }, fnMap: Map) => {
        fnMap.flyTo({
            lat: position.lat,
            lng: position.lng
        })
    }

    return (
        <Transition className="px-4 py-8 md:py-24" id="location">
            <h4 className="text-center text-secondary" id="location">Localización</h4>
            <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">
                Disponible en los mejores distritos de Lima
            </h2>
            <MapContainer center={coordinatePoint} zoom={12} scrollWheelZoom={false} className="h-[700px] rounded-2xl overflow-hidden">
                <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png" />
                <MarkerHouse selectMarker={centerMarker} onSelectDistrict={onSelectDistrict} />
            </MapContainer>
        </Transition>
    )
}