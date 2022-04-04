import CitiesCard from '../cities-card/cities-card';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
  onCardHover?: (id: number) => void;
};

function CardList({ offers, onCardHover }: OfferListProps): JSX.Element {
  return (
    <>
      {offers
        .map((offer) => (
          <CitiesCard
            key={offer.id}
            offer={offer}
            onCardHover={onCardHover}
          />
        ))}
    </>
  );
}

export default CardList;
