import CardList from '../card-list/card-list';
import CitiesLinks from '../cities-links/cities-links';
import { City, Points, Point } from '../../types/types';
import { CityTabs, SortPopup } from '../../const';
import Map from '../map/map';
import { Offer } from '../../types/offer';
import PlacesSorting from '../places-sorting/places-sorting';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

type CitiesProps = {
  offers: Offer[];
  city: City;
  points: Points;
  cityTabs: typeof CityTabs;
  sortPopup: typeof SortPopup;
}

function Main({ offers, city, points, cityTabs, sortPopup }: CitiesProps): JSX.Element {

  const setCityName = useAppSelector((state) => state.city);
  const sortOffers = offers.filter((item) => item.city.name.includes(setCityName));
  const [selectedPoint] = useState<Point | undefined>(
    undefined,
  );

  return (
    <>
      <CitiesLinks cityTabs={cityTabs} offers={sortOffers} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortOffers.length} places to stay in {setCityName} </b>
            <PlacesSorting sortPopup={sortPopup} />
            <div className="cities__places-list places__list tabs__content">
              <CardList offers={sortOffers} />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={city} points={points} selectedPoint={selectedPoint} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
