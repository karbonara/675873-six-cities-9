import { useRef, useEffect } from 'react';
import { Marker } from 'leaflet';
import useMap from '../../hooks/useMap';

import 'leaflet/dist/leaflet.css';
import { City, Points } from '../../types/types';

type MapProps = {
  city: City;
  points: Points;
};


function Map(props: MapProps): JSX.Element {
  const { city, points } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker

          .addTo(map);
      });
    }
  }, [map, points]);

  return <div style={{ height: '900px' }} ref={mapRef}></div>;
}

export default Map;
