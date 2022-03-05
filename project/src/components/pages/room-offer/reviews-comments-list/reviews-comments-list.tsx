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
          <ReviewsComments comments={comment} key={comment.id} />
        ))
      }
    </ul>
  );
}

export default ReviewsCommentsList;
