import { CityTabs } from '../../const';
import { useAppDispatch } from '../../hooks';
import { useState } from 'react';
import { setCityName } from '../../store/reducer/city-reducer';
import { Offer } from '../../types/offer';

type CityProps = {
  offers: Offer[];
  cityTabs: typeof CityTabs;
}

function CitiesLinks({ cityTabs, offers }: CityProps): JSX.Element {

  const [activeItem, setActiveItem] = useState(0);
  const dispatch = useAppDispatch();
  const handleClick = (cityName: string, index: number) => {
    dispatch(setCityName(cityName));
    setActiveItem(index);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cityTabs.map((cityName, index) => (
              <li key={cityName} className="locations__item" onClick={() => handleClick(cityName, index)} >
                <a className={`locations__item-link ${activeItem === index ? ' tabs__item tabs__item--active' : 'locations__item-link tabs__item'}`} href="#locations">
                  <span>{cityName}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default CitiesLinks;
