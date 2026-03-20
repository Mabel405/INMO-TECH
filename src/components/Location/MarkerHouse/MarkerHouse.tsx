import { Marker, Popup, useMap } from 'react-leaflet';
import { MarkerHouseProps } from './MarkerHouse.types';
import { icon } from 'leaflet';
import { housesData } from './MarkerHouse.data';
import { FaMapMarkedAlt } from 'react-icons/fa';
import Image from 'next/image';

export function MarkerHouse(props: MarkerHouseProps) {
    const { selectMarker, onSelectDistrict } = props;
    const fnMap = useMap()
    const customIcon = icon({
        iconUrl: '/assets/marker.svg',
        iconSize: [40, 40]
    })

    const handleVerPropiedades = (name: string) => {
        // Filtra por distrito
        onSelectDistrict(name)
        // Scroll a la sección de propiedades
        document.getElementById("properties-section")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        housesData.map(({ id, name, position, image }) => (
            <Marker key={id} position={position} icon={customIcon} eventHandlers={{
                click: () => { selectMarker(position, fnMap) }
            }}>
                <Popup>
                    <div className="flex items-center mb-2">
                        <span className="mr-4 text-secondary">
                            <FaMapMarkedAlt />
                        </span>
                        <h5 className="text-md text-secondary">{name}</h5>
                    </div>
                    <Image src={`/assets/houses/${image}`} alt={name} width={100} height={100} className="w-full h-auto" />
                    <button
                        onClick={() => handleVerPropiedades(name)}
                        className="px-3 py-2 mt-2 text-white rounded-lg bg-secondary w-full"
                    >
                        Ver propiedades
                    </button>
                </Popup>
            </Marker>
        ))
    )
}