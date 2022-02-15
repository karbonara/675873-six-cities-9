import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import ErrorPage from '../pages/error-page/error-page';
import Favorites from '../pages/favorites/favorites';
import RoomOffer from '../pages/room-offer/room-offer';
import Login from '../pages/login/login';
import Layout from '../layout/layout';
import Main from '../main/main';
type AppCitiesProps = {
  placesToStay: number;
}
function App({ placesToStay }: AppCitiesProps): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={AppRoute.Root} element={<Main placesToStay={placesToStay} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<RoomOffer />} />
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
