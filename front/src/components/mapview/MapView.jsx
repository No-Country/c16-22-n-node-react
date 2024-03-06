import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import s from './MapView.module.css'

const Mapview = () => {
    return (
        <div className={s.map}>
            <MapContainer center={[-37.60288, -62.40207]} zoom={7} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Mapview;  