import CardList from '../../card-list/card-list';
import CitiesLinks from '../../cities-links/cities-links';
import { CityTabs, SortPopup } from '../../../const';
import Map from '../../map/map';
import PlacesSorting from '../../places-sorting/places-sorting';
import { useAppSelector } from '../../../hooks';
import { getOffers, getCurrentCityName } from '../../../store/selectors';
import { useState } from 'react';
import { Point } from '../../../types/types';

function Main(): JSX.Element {

  const offers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCurrentCityName);
  const sortOffers = offers.filter((item) => item.city.name.includes(currentCity));
  const [selectedPoint] = useState<Point | undefined>(undefined);
  const [id, setOffersId] = useState(0);
  const handleMouseEnter = (newId: number) => setOffersId(newId);

  return (
    <>
      <CitiesLinks
        cityTabs={CityTabs}
      />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortOffers.length} places to stay in {currentCity} </b>
            <PlacesSorting
              sortPopup={SortPopup}
            />
            <div className="cities__places-list places__list tabs__content">
              <CardList
                offers={sortOffers}
                onCardHover={handleMouseEnter}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              {/* <Map
                offersInCurrentCity={sortOffers}
                currentId={id}
              /> */}
              <Map
                selectedPoint={selectedPoint}
                city={{ title: '', lat: 0, lng: 0, zoom: 0 }}
                points={[]}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
