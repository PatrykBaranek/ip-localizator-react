import { MapContainer, Marker, TileLayer } from 'react-leaflet';

export const Map: React.FC = ({}) => {
  const position: [number, number] = [51.505, -0.09];

  return (
    <MapContainer center={position} zoom={13} style={{ height: '80vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" size={512} />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};
