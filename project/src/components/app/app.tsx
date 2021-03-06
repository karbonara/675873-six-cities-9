import { AppRoute } from '../../const';
import ErrorPage from '../pages/error-page/error-page';
import Favorites from '../pages/favorites/favorites';
import Layout from '../layout/layout';
import Login from '../pages/login/login';
import Main from '../pages/main/main';
import PrivateRoute from '../private-route/private-route';
import { Route, Routes } from 'react-router-dom';
import Room from '../pages/room-offer/room';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../utils';
import { useAppSelector } from '../../hooks';

function App(): JSX.Element {

  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
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
