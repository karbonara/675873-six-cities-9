import CardList from '../card-list/card-list';
import CitiesLinks from '../cities-links/cities-links';
import { CityTabs, SortPopup } from '../../const';
// import Map from '../map/map';
import PlacesSorting from '../places-sorting/places-sorting';
// import { useState } from 'react';
import { useAppSelector } from '../../hooks';
// import { Point, Points } from '../../types/types';

type CitiesProps = {
  // points: Points;
}

function Main(props: CitiesProps): JSX.Element {

  // const { points } = props;

  const { offers, city } = useAppSelector((state) => state);
  const sortOffers = offers.filter((item) => item.city.name.includes(city));
  // const cityLocation = sortOffers[0].city.location;
  // const [selectedPoint] = useState<Point | undefined>(
  //   undefined,
  // );

  return (
    <>
      <CitiesLinks cityTabs={CityTabs} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortOffers.length} places to stay in {city} </b>
            <PlacesSorting sortPopup={SortPopup} />
            <div className="cities__places-list places__list tabs__content">
              <CardList offers={sortOffers} />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              {/* <Map city={cityLocation} points={points} selectedPoint={selectedPoint} /> */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
