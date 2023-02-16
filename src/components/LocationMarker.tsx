import { LocationEvent } from 'leaflet';
import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

export const LocationMarker = () => {
  const [position, setPosition] = useState<[number, number]>([51.477928, 0]);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: LocationEvent) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};
