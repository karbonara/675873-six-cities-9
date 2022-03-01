import { Link } from 'react-router-dom';
import { HEIGHT_LOGO, WIDTH_LOGO } from '../../const';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo-link header__logo-link--active" to="/">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={WIDTH_LOGO}
        height={HEIGHT_LOGO}
      />
    </Link>
  );
}

export default Logo;
