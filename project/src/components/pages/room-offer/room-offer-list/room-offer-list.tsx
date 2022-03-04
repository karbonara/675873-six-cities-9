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
        <RoomOffer offers={offer} key={offer.id} comments={comments} city={city} points={points} />
      ))}
    </>
  );
}

export default RoomOfferList;
