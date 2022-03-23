import { Comment } from '../../../../types/comment';
import { Offer } from '../../../../types/offer';
import RoomOffer from '../room-offer-card/room-offer-card';
import { City, Points } from '../../../../types/types';

type OfferListProps = {
  offers: Offer[];
  comments: Comment[];
  city: City;
  points: Points;
};

// function RoomOfferList({ offers, comments, city, points }: OfferListProps): JSX.Element {
function RoomOfferList(props: OfferListProps): JSX.Element {
  const { offers, comments, city, points } = props;
  return (
    <>
      {offers.map((offer) => (
        <RoomOffer offers={offers} key={offer.id} city={city} points={points} comments={comments} />
      ))}
    </>
  );
}

export default RoomOfferList;
