import { Comment } from '../../../../types/comment';
import ReviewsComments from '../reviews-comments/reviews-comments';

type CommentListProps = {
  comments: Comment[];
};

function ReviewsCommentsList({ comments }: CommentListProps): JSX.Element {

  return (
    <ul className="reviews__list">
      {
        comments.map((comment) => (
          <ReviewsComments key={comment.id} comments={comment} />
        ))
      }
    </ul>
  );
}

export default ReviewsCommentsList;
