import ReviewsList from './reviews-list';
import Punctuation from './punctuation';
import { ProductType } from 'types';

type ReviewsProductType = {
  show: boolean;
  product: ProductType;
}

const Reviews = ({ show, product }: ReviewsProductType) => {
  return (
    <section className={`product-single__reviews ${show ? 'flex' : 'hidden'} flex-col space-y-6 p-6`}>
      <Punctuation 
        punctuation={product.punctuation.punctuation}
        countOpinions={product.punctuation.countOpinions}
        votes={product.punctuation.votes} 
      />
      <ReviewsList reviews={product.reviews} />
    </section>
  );
};
  
export default Reviews;
