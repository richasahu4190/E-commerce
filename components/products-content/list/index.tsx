import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';

const ProductsContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/products', fetcher);

  if (error) return <div className="text-red-500">Failed to load products</div>;

  return (
    <>
      {!data && <ProductsLoading />}

      {data && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {data.map((item: ProductTypeList) => (
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsContent;
