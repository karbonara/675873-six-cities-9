import CardList from '../card-list/card-list';
import CitiesLinks from '../cities-links/cities-links';
import Map from '../map/map';
import { Offer } from '../../types/offer';
import PlacesSorting from '../places-sorting/places-sorting';
import { City, Points } from '../../types/types';

type CitiesProps = {
  placesFound: number;
  offers: Offer[];
  city: City;
  points: Points;
}

function Main({ placesFound, offers, city, points }: CitiesProps): JSX.Element {

  return (
    <>
      <CitiesLinks />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesFound} places to stay in Amsterdam</b>
            <PlacesSorting />
            <div className="cities__places-list places__list tabs__content">
              <CardList offers={offers} />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map city={city} points={points} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
