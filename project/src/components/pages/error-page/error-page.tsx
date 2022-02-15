import { Link } from 'react-router-dom';

function ErrorPage(): JSX.Element {
  return (
    <div>
      <h1 className='error__page--title'>404 Not Found</h1>
      <Link className="error__page--link" to="/">
        Вернуться на главную
      </Link>
    </div>
  );
}
export default ErrorPage;
