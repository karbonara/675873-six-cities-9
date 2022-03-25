import { Comment } from '../../../../types/comment';
// import { Offer } from '../../../../types/offer';
import RoomOffer from '../room-offer-card/room-offer-card';
import { City, Points } from '../../../../types/types';

// import { getOffers } from '../../../../store/selectors';
import { useAppSelector } from '../../../../hooks';

type OfferListProps = {
  // offers: Offer[];
  comments: Comment[];
  city: City;
  points: Points;
};

function RoomOfferList(props: OfferListProps): JSX.Element {

  // const { offers, comments, city, points } = props;
  const { comments, city, points } = props;

  // const offerItem = useAppSelector(getOffers);

  const activCity = useAppSelector((state) => state.offers);

  // eslint-disable-next-line no-console
  console.log(activCity);

  return (
    <>
      {activCity.map((offer) => (
        <RoomOffer offers={activCity} key={offer.id} city={city} points={points} comments={comments} />
      ))}
    </>
  );
}

export default RoomOfferList;
