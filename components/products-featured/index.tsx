import ProductsCarousel from './carousel';
import useSwr from 'swr';

const ProductsFeatured = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <header className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-semibold">Selected just for you</h3>
          <a href="/products" className="btn btn--rounded btn--border text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition">
            Show All
          </a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured;
