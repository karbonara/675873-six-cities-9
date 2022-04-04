import { City, Points, Point } from '../../types/types';
// import { Icon, layerGroup, Marker } from 'leaflet';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, MAP_HEIGHT, ICON_SIZE, ICON_ANCHOR } from '../../const';
// import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
// import { Offer } from '../../types/offer';

type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_SIZE, ICON_SIZE],
  iconAnchor: [ICON_ANCHOR, ICON_SIZE],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_SIZE, ICON_SIZE],
  iconAnchor: [ICON_ANCHOR, ICON_SIZE],
});

function Map(props: MapProps): JSX.Element {
  const { city, points, selectedPoint } = props;

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
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: MAP_HEIGHT }} ref={mapRef} />;
}

// type MapProps = {
//   offersInCurrentCity: Offer[];
//   currentId?: number,
// }

// function Map({ offersInCurrentCity, currentId }: MapProps): JSX.Element {
//   const [{ city }] = offersInCurrentCity;
//   const mapRef = useRef(null);
//   const map = useMap(mapRef, city);

//   const defaultCustomIcon = new Icon({
//     iconUrl: URL_MARKER_DEFAULT,
//     iconSize: [27, 39],
//     iconAnchor: [13, 39],
//   });

//   const currentCustomIcon = new Icon({
//     iconUrl: URL_MARKER_CURRENT,
//     iconSize: [27, 39],
//     iconAnchor: [13, 39],
//   });

//   useEffect(() => {
//     const markerGroup = layerGroup();

//     if (map) {
//       map.setView({
//         lat: city.location.latitude,
//         lng: city.location.longitude,
//       });

//       offersInCurrentCity.forEach(({ id, location }) => {
//         const marker = new Marker({
//           lat: location.latitude,
//           lng: location.longitude,
//         });

//         marker
//           .setIcon(
//             currentId && currentId === id
//               ? currentCustomIcon
//               : defaultCustomIcon,
//           )
//           .addTo(markerGroup);
//       });

//       markerGroup.addTo(map);
//     }
//     return () => {
//       markerGroup.clearLayers();
//     };
//   }, [map, offersInCurrentCity, currentId]);

//   return (
//     <section
//       ref={mapRef}
//     />
//   );
// }

export default Map;
