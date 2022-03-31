import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks';
import ErrorPage from '../../error-page/error-page';
import RoomOffer from '../room-offer-card/room-offer-card';

function RoomOfferList(): JSX.Element {

  const offers = useAppSelector((state) => state.offers);
  const paramsId = Number(useParams().id);
  const currentOffer = offers.some((offer) => offer.id === paramsId);

  if (currentOffer) {
    return (
      <RoomOffer />
    );
  }

  return (
    <ErrorPage />
  );
}

export default RoomOfferList;
