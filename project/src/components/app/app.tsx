import Header from '../header/header';
import CitiesLinks from '../cities-links/cities-links';
import Cities from '../cities/cities';
type AppCitiesProps = {
  placesToStay: number;
}
function App({ placesToStay }: AppCitiesProps): JSX.Element {
  return (
    <div>
      <Header />
      <CitiesLinks />
      <Cities placesToStay={placesToStay} />
    </div>
  );
}

export default App;
