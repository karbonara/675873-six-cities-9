import { CityTabs } from '../../const';

type CityProps = {
  cityTabs: typeof CityTabs;
}

function CitiesLinks({ cityTabs }: CityProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.keys(cityTabs).map((item) => (
              <li key={item} className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>{item}</span>
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
