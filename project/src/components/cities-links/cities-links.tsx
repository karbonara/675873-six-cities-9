import { CityTabs } from '../../const';
// import { useAppDispatch, useAppSelector } from '../../hooks';

type CityProps = {
  cityTabs: typeof CityTabs;
}

function CitiesLinks({ cityTabs }: CityProps): JSX.Element {

  // const { step, mistakes } = useAppSelector((state) => state);

  // const link = links[step];

  // const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.keys(cityTabs).map((cities) => (
              <li key={cities} className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>{cities}</span>
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
