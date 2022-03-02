import FavoritesList from '../favorites-list/favorites-list';
import { Offer } from '../../types/offer';

type FavoriteProps = {
  offer: Offer[];
};

function FavoritesCard({ offer }: FavoriteProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              offer.map((item) => <FavoritesList key={item.id} offer={item} />)
            }
          </ul>
        </section>
      </div>
    </main>

  );
}

export default FavoritesCard;
