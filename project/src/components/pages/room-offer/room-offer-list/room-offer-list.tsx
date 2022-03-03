import { Comment } from '../../../../types/comment';
import { Offer } from '../../../../types/offer';
import RoomOffer from '../room-offer';

type OfferListProps = {
  offers: Offer[];
  comments: Comment[];
};

function RoomOfferList({ offers, comments }: OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <RoomOffer offer={offer} key={offer.id} comments={comments} />
      ))}
    </>
  );
}

export default RoomOfferList;
