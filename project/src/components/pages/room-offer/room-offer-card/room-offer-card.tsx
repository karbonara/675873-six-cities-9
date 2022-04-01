import { AuthorizationStatus } from '../../../../const';
import CardList from '../../../card-list/card-list';
import ReviewsCommentsList from '../reviews-comments-list/reviews-comments-list';
import SubmitCommentForm from '../../../submit-comment-form/submit-comment-form';
import { STYLE_RATING, PROPERTY_USER_AVATAR } from '../../../../const';
// import Map from '../../../map/map';
// import { City, Points, Point } from '../../../../types/types';
import { useAppSelector } from '../../../../hooks';
import { useParams } from 'react-router-dom';
import { Comment } from '../../../../types/comment';

function RoomOfferCard(): JSX.Element {

  const { authorizationStatus } = useAppSelector((state) => state);
  const params = Number(useParams().id);
  const offers = useAppSelector((state) => state.offers);
  const commentsItems: Comment[] = useAppSelector((state) => state.comments);
  const offerItem = offers.filter((offer) => offer.id === params)[0];

  // const [selectedPoint] = useState<Point | undefined>(
  //   undefined,
  // );

  return (
    <>
      <section className="property" >
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offerItem.images.map((img) => (
              <div
                key={img}
                className="property__image-wrapper"
              >
                <img className="property__image" src={img} alt={offerItem.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {
              offerItem.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offerItem.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${offerItem.rating * STYLE_RATING}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offerItem.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offerItem.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offerItem.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offerItem.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{offerItem.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What`s inside</h2>
              <ul className="property__inside-list">
                {
                  offerItem.goods.map((insides) => (
                    <li key={insides} className="property__inside-item">
                      {insides}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={offerItem.host.avatarUrl}
                    width={PROPERTY_USER_AVATAR}
                    height={PROPERTY_USER_AVATAR}
                    alt={offerItem.host.name}
                  />
                </div>
                <span className="property__user-name">{offerItem.host.name}</span>
                {
                  offerItem.host.isPro &&
                  <span className="property__user-status">Pro</span>
                }
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offerItem.description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">{commentsItems.length}</span>
              </h2>
              <ReviewsCommentsList comments={commentsItems} />
              {authorizationStatus === AuthorizationStatus.Auth ? <SubmitCommentForm /> : ''}
            </section>
          </div>
        </div>
        <section className="property__map map">
          {/* <Map city={city} points={points} selectedPoint={selectedPoint} /> */}
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <CardList offers={offers} />
          </div>
        </section>
      </div>
    </>
  );
}

export default RoomOfferCard;
