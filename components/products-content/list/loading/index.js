import ProductItemLoading from './../../../product-item/loading';

const ProductsLoading = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
    </section>
  );
};
  
export default ProductsLoading;
