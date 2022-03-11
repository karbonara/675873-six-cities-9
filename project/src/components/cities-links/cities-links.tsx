import { useAppDispatch } from '../../hooks';
import { useState } from 'react';
import { CityTabs } from '../../const';
import { setCityName } from '../../store/reducer/city-reducer';

type CityProps = {
  cityTabs: typeof CityTabs;
}

function CitiesLinks({ cityTabs }: CityProps): JSX.Element {

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
            cityTabs.map((cities, index) => (
              <li key={cities} className="locations__item" onClick={() => handleClick(cities, index)} >
                <a className={activeItem === index ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#locations">
                  <span>{cities}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div >
  );
}

export default CitiesLinks;
