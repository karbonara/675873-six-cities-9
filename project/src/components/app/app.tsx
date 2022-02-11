import Header from '../header/header';
import CitiesLinks from '../cities-links/cities-links';
import Main from '../main/main';
type AppCitiesProps = {
  placesToStay: number;
}
function App({ placesToStay }: AppCitiesProps): JSX.Element {
  return (
    <div>
      <Header />
      <CitiesLinks />
      <Main placesToStay={placesToStay} />
    </div>
  );
}

export default App;
