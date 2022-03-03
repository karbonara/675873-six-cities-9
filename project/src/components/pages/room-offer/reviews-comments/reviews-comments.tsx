import { Comment } from '../../../../types/comment';
import { STYLE_RATING } from '../../../../const';

type CommentProps = {
  comments: Comment;
};

function ReviewsComments({ comments }: CommentProps): JSX.Element {
  const { comment, rating, user, date } = comments;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * STYLE_RATING}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          {date}
        </time>
      </div>
    </li>
  );
}

export default ReviewsComments;
