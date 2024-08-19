type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  return (
    <section className={`product-single__description ${show ? 'flex' : 'hidden'} flex-col space-y-6`}>
      <div className="product-description-block flex items-start space-x-4">
        <i className="icon-cart text-gray-500"></i>
        <div>
          <h4 className="text-lg font-semibold">Details and product description</h4>
          <p className="text-gray-700">
            White Summer Vibes T-shirt in the uiKit line with a colorful print. <br />Made of jersey cotton. T-shirt fits perfectly with jeans, pants, or shorts.
          </p>
        </div>
      </div>
      <div className="product-description-block flex items-start space-x-4">
        <i className="icon-cart text-gray-500"></i>
        <div>
          <h4 className="text-lg font-semibold">Details and product description</h4>
          <p className="text-gray-700">
            White Summer Vibes T-shirt in the uiKit line with a colorful print. <br />Made of jersey cotton. T-shirt fits perfectly with jeans, pants, or shorts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
