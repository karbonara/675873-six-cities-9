import CardList from '../card-list/card-list';
import CitiesLinks from '../cities-links/cities-links';
import Map from '../map/map';
import { Offer } from '../../types/offer';
import PlacesSorting from '../places-sorting/places-sorting';
import { useState } from 'react';
import { City, Points, Point } from '../../types/types';
import { CityTabs, SortPopup } from '../../const';

type CitiesProps = {
  placesFound: number;
  offers: Offer[];
  city: City;
  points: Points;
  cityTabs: typeof CityTabs;
  sortPopup: typeof SortPopup;
}

function Main({ placesFound, offers, city, points, cityTabs, sortPopup }: CitiesProps): JSX.Element {

  const [selectedPoint] = useState<Point | undefined>(
    undefined,
  );

  return (
    <>
      <CitiesLinks cityTabs={cityTabs} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesFound} places to stay in Amsterdam</b>
            <PlacesSorting sortPopup={SortPopup} />
            <div className="cities__places-list places__list tabs__content">
              <CardList offers={offers} />
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
