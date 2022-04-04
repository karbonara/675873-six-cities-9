import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { postCommentsAction } from '../../store/action';

type CommentsFormProps = {
  offerId: number,
}

function SubmitCommentForm({ offerId }: CommentsFormProps): JSX.Element {

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useAppDispatch();

  const onClickSubmit = () => {
    setFormData({
      rating: formData.rating,
      review: formData.review,
    });
  };

  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const fieldChangeHandle = (evt: FormEvent<EventTarget>) => {
    evt.preventDefault();
    dispatch(postCommentsAction({
      comment,
      rating,
      offerId,
    }));

    const { name, value } = evt.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });

    setRating(0);
    setComment('');
  };

  const isFormDisabled = () => !!formData.rating && !!formData.review;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={fieldChangeHandle}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="5-stars"
          type="radio"
          value='5'
          onChange={fieldChangeHandle}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="4-stars"
          type="radio"
          value='4'
          onChange={fieldChangeHandle}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="3-stars"
          type="radio"
          value='3'
          onChange={fieldChangeHandle}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="2-stars"
          type="radio"
          value='2'
          onChange={fieldChangeHandle}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          id="1-star"
          type="radio"
          value='1'
          onChange={fieldChangeHandle}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={fieldChangeHandle}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{''}
          <span className="reviews__star">rating</span> and describe your stay with
          at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormDisabled()}
          onClick={onClickSubmit}
        >
          Submit
        </button>
      </div>
    </form>

  );
}

export default SubmitCommentForm;
