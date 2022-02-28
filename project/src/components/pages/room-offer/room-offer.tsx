import SubmitCommentForm from '../../submit-comment-form/submit-comment-form';
import ReviewsComments from './reviews-comments/reviews-comments';
import { Offer } from '../../../types/offer';
// import { useParams } from 'react-router-dom';
type OfferProps = {
  offer: Offer;
};
function RoomOffer({ offer }: OfferProps): JSX.Element {
  // const params = useParams();
  // const id = Number(params.id);

  const { host, description, price, title, maxAdults, bedrooms, type, rating } = offer;
  return (
    <>
      <section className="property" >
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((img) => (
              <div
                key={img}
                className="property__image-wrapper"
              >
                <img className="property__image" src={img} alt={title} />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {
              offer.isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
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
                <span style={{ width: `${rating * 20}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What`s inside</h2>
              <ul className="property__inside-list">
                {
                  offer.goods.map((insides) => (
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
                    src={host.avatarUrl}
                    width={74}
                    height={74}
                    alt={host.name}
                  />
                </div>
                <span className="property__user-name">{host.name}</span>
                {
                  offer.host.isPro &&
                  <span className="property__user-status">Pro</span>
                }
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">1</span>
              </h2>
              <ReviewsComments />
              <SubmitCommentForm />
            </section>
          </div>
        </div>
        <section className="property__map map" />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">

          </div>
        </section>
      </div>

    </>

  );
}

export default RoomOffer;
