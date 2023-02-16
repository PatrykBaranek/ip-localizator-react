import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ILocation } from '../types/ipfy-types';

interface IMapProps {
  localization: ILocation | undefined;
}

export const Map: React.FC<IMapProps> = ({ localization }) => {
  const position: [number, number] = [51.505, -0.09];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '80vh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        size={512}
        zoomOffset={10}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};
