import { Offer } from '../../../../types/offer';
import RoomOffer from '../room-offer';
type OfferListProps = {
  offers: Offer[];
};
function RoomOfferList({ offers }: OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <RoomOffer offer={offer} key={offer.id} />
      ))}
    </>
  );
}

export default RoomOfferList;
