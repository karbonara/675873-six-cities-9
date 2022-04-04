import CitiesCard from '../cities-card/cities-card';
import { Offer } from '../../types/offer';
import { OFFERS_FROM, OFFERS_TO } from '../../const';

type NearPlacesProps = {
  offers: Offer[];
}

function NearPlaces({ offers }: NearPlacesProps): JSX.Element {
  return (
    <>
      {offers
        .slice(OFFERS_FROM, OFFERS_TO)
        .map((offer: Offer) => (
          <CitiesCard
            key={offer.id}
            offer={offer}
          />
        ))}
    </>
  );
}

export default NearPlaces;
