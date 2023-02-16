import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { ILocation } from '../types/ipfy-types';
import { useEffect, useState } from 'react';
import { LocationMarker } from './LocationMarker';

interface IMapProps {
  localization: ILocation | undefined;
}

export const Map: React.FC<IMapProps> = ({ localization }) => {
  const [position, setPosition] = useState<[number, number]>([51.477928, 0]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, [position]);

  return (
    <MapContainer center={position} zoom={5} scrollWheelZoom={true} style={{ height: '80vh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};
