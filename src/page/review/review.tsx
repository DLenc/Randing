import reviewsData from '../../constants/reviewInfo';

interface Review {
  key: number;
  title: string;
  content: string;
}

const ReviewList = () => {
  return (
    <div>
      <h1>Review List</h1>
      <ul>
        {reviewsData.map((review: Review) => (
          <li key={review.key}>
            <h2>{review.title}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
