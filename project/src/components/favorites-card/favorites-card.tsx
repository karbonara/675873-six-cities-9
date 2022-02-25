import FavoritesList from '../favorites-list/favorites-list';
import { Favorite } from '../../types/favorites';
type FavoriteProps = {
  favorites: Favorite[];
};
function FavoritesCard({ favorites }: FavoriteProps): JSX.Element {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              favorites.map((item) => <FavoritesList key={item.id} favorites={item} />)
            }
          </ul>
        </section>
      </div>
    </main>

  );
}

export default FavoritesCard;
