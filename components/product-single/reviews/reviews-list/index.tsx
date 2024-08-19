import Rater from 'react-rater';
import createMarkup from 'utils/markup';
import { ReviewType } from 'types';

type ReviewsListType = {
  reviews: ReviewType[];
};

const ReviewsList = ({ reviews }: ReviewsListType) => {
  return (
    <section className="reviews-list p-6 bg-gray-100 rounded-lg shadow-md">
      {reviews.map((review, index) => (
        <div key={index} className="review-item flex items-start mb-6 p-4 bg-white rounded-lg shadow-sm">
          {/* Avatar Section */}
          <div className="review__avatar mr-4 flex-shrink-0">
            <img
              src={review.avatar}
              alt="avatar"
              className="w-12 h-12 object-cover rounded-full border border-gray-300"
            />
          </div>
          
          {/* Content Section */}
          <div className="review__content flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{review.name}</h3>
            <Rater total={5} interactive={false} rating={review.punctuation}  />
            <div
              className="review__comment text-gray-600"
              dangerouslySetInnerHTML={createMarkup(review.description)}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ReviewsList;
