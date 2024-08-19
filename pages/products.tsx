import Layout from '../layouts/Main';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import ProductsFilter from '../components/products-filter';
import ProductsContent from '../components/products-content';

const Products = () => (
  <Layout>
    <Breadcrumb />
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        <ProductsFilter />
        <ProductsContent />
      </div>
    </section>
    <Footer />
  </Layout>
);

export default Products;
