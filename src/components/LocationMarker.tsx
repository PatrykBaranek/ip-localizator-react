import { LocationEvent } from 'leaflet';
import { useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

interface ILocationMarkerProps {
  position: [number, number] | null;
}

export const LocationMarker: React.FC<ILocationMarkerProps> = ({ position }) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound() {
      setMarkerPosition(position);
      map.flyTo({ lat: position?.[0] as number, lng: position?.[1] as number }, map.getZoom());
    },
  });

  return (
    markerPosition && (
      <Marker position={markerPosition}>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
};
