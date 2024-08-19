import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Footer from '../../components/footer';
import Layout from '../../layouts/Main';
import Breadcrumb from '../../components/breadcrumb';
import ProductsFeatured from '../../components/products-featured';
import Gallery from '../../components/product-single/gallery';
import Content from '../../components/product-single/content';
import Description from '../../components/product-single/description';
import Reviews from '../../components/product-single/reviews';
import { server } from '../../utils/server';

// types
import { ProductType } from 'types';

type ProductPageType = {
  product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }: ProductPageType) => {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <Gallery images={product.images} />
            </div>
            <div className="lg:w-1/2">
              <Content product={product} />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex space-x-4 mb-6">
              <button 
                type="button" 
                onClick={() => setShowBlock('description')} 
                className={`py-2 px-4 rounded-md border font-semibold ${showBlock === 'description' ? 'bg-yellow-500 text-white border-yellow-500' : 'text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                Description
              </button>
              <button 
                type="button" 
                onClick={() => setShowBlock('reviews')} 
                className={`py-2 px-4 rounded-md border font-semibold ${showBlock === 'reviews' ? 'bg-yellow-500 text-white border-yellow-500' : 'text-gray-700 border-gray-300 hover:bg-gray-100'}`}
              >
                Reviews (2)
              </button>
            </div>

            <Description show={showBlock === 'description'} />
            <Reviews product={product} show={showBlock === 'reviews'} />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsFeatured />
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Product;
