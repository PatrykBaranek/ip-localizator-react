import { MapContainer, TileLayer } from 'react-leaflet';
import { ILocation } from '../types/ipfy-types';
import { useEffect, useState } from 'react';
import { LocationMarker } from './LocationMarker';

interface IMapProps {
  localization: ILocation | undefined;
}

export const Map: React.FC<IMapProps> = ({ localization }) => {
  const [position, setPosition] = useState<[number, number] | null>(
    localization ? [localization.lat, localization.lng] : null
  );

  if (position === null) {
    setPosition([51.477928, 0]);
  }

  useEffect(() => {
    if (localization?.lat && localization?.lng) {
      console.log(localization);
      console.log(position);
      setPosition([localization.lat, localization.lng]);
    }
  }, [localization]);

  return (
    <MapContainer
      center={position as [number, number]}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: '80vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker position={position} />
    </MapContainer>
  );
};
