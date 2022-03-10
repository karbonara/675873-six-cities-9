import { SetStateAction, useState } from 'react';
import { CityTabs } from '../../const';
// import { useAppDispatch, useAppSelector } from '../../hooks';

type CityProps = {
  cityTabs: typeof CityTabs;
}

function CitiesLinks({ cityTabs }: CityProps): JSX.Element {

  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index: SetStateAction<number>) => {
    setActiveItem(index);
  };

  // const { step, mistakes } = useAppSelector((state) => state);

  // const link = links[step];

  // const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cityTabs.map((cities, index) => (
              <li key={cities} className="locations__item" >
                <a onClick={() => onSelectItem(index)} className={activeItem === index ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#locations">
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
