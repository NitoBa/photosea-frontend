import { MapContainer, TileLayer } from 'react-leaflet';
const Map: React.FC = () => {

    return (
        <MapContainer
            center={[-5.0803407, -42.8150323]}
            zoom={13}
            style={{ width: '100%', height: '100%' }}
        // scrollWheelZoom={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    );
}

export default Map;