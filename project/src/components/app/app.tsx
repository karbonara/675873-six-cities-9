import { AppRoute, AuthorizationStatus } from '../../const';
import ErrorPage from '../pages/error-page/error-page';
import Favorites from '../pages/favorites/favorites';
import Layout from '../layout/layout';
import Login from '../pages/login/login';
import Main from '../main/main';
import PrivateRoute from '../private-route/private-route';
import { Route, Routes } from 'react-router-dom';
import RoomOfferList from '../pages/room-offer/room-offer-list';
import { Offer } from '../../types/offer';
type AppCitiesProps = {
  placesFound: number;
  offers: Offer[];
}
function App({ placesFound, offers }: AppCitiesProps): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={AppRoute.Root} element={<Main placesFound={placesFound} offers={offers} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<RoomOfferList offers={offers} />} />
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
