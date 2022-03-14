import CitiesCard from '../cities-card/cities-card';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
};

function CardList({ offers }: OfferListProps): JSX.Element {
  return (
    <>
      {offers
        .map((offer) => (
          <CitiesCard offer={offer} key={offer.id} />
        ))}
    </>
  );
}

export default CardList;
