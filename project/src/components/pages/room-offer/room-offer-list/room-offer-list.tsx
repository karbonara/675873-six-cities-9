import { Comment } from '../../../../types/comment';
import { Offer } from '../../../../types/offer';
import RoomOffer from '../room-offer';
import { City, Points } from '../../../../types/types';

type OfferListProps = {
  offers: Offer[];
  comments: Comment[];
  city: City;
  points: Points;
};

function RoomOfferList({ offers, comments, city, points }: OfferListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <RoomOffer offers={offers} key={offer.id} city={city} points={points} comments={comments} />
      ))}
    </>
  );
}

export default RoomOfferList;
