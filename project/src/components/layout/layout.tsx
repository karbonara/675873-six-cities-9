import { AuthorizationStatus } from '../../const';
import { Outlet } from 'react-router-dom';
import UserLogged from '../user-logged/user-logged';
import UserNotLogged from '../user-not-logged/user-not-logged';
import { useAppSelector } from '../../hooks';
import Logo from '../logo/logo';

function Layout(): JSX.Element {

  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            {authorizationStatus === AuthorizationStatus.Auth ? <UserNotLogged /> : <UserLogged />}
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
