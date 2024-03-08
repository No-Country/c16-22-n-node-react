import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import s from './MapView.module.css'

const Mapview = () => {
    const center = [51.505, -0.09]; // Coordenadas del centro del mapa
    const zoom = 13;

    return (
        <div className={s.map}>
            <Map center={center} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        Londres, Reino Unido
                    </Popup>
                </Marker>
            </Map>
        </div>
    )
}

export default Mapview;  