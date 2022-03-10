import { AppRoute, AuthorizationStatus, CityTabs, SortPopup } from '../../const';
import ErrorPage from '../pages/error-page/error-page';
import Favorites from '../pages/favorites/favorites';
import Layout from '../layout/layout';
import Login from '../pages/login/login';
import Main from '../main/main';
import PrivateRoute from '../private-route/private-route';
import { Route, Routes } from 'react-router-dom';
import { Offer } from '../../types/offer';
import RoomOfferList from '../pages/room-offer/room-offer-list/room-offer-list';
import { City, Points } from '../../types/types';
import { Comment } from '../../types/comment';

type AppCitiesProps = {
  placesFound: number;
  offers: Offer[];
  city: City;
  points: Points;
  comments: Comment[];
  cityTabs: typeof CityTabs;
  sortPopup: typeof SortPopup;
}

function App({ placesFound, offers, city, points, comments, cityTabs, sortPopup }: AppCitiesProps): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={AppRoute.Root} element={<Main placesFound={placesFound} offers={offers} city={city} points={points} cityTabs={cityTabs} sortPopup={SortPopup} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<RoomOfferList offers={offers} comments={comments} city={city} points={points} />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Favorites />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
