import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            style={{ backgroundImage: 'url(/images/featured-1.jpg)' }} 
            className="relative bg-cover bg-center h-[400px] sm:h-[500px] mb-8"
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">New arrivals are now in!</h3>
                <a href="#" className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
                  Show Collection
                </a>
              </div>
            </div>
          </article>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <article 
              style={{ backgroundImage: 'url(/images/featured-2.jpg)' }} 
              className="relative bg-cover bg-center h-[300px]"
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Basic t-shirts $29,99</h3>
                  <a href="#" className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
                    More details
                  </a>
                </div>
              </div>
            </article>
            
            <article 
              style={{ backgroundImage: 'url(/images/featured-3.jpg)' }} 
              className="relative bg-cover bg-center h-[300px]"
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Sale this summer</h3>
                  <a href="#" className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
                    VIEW ALL
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8">
            <h4 className="text-2xl font-semibold">Why should you choose us?</h4>
          </header>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <li className="flex flex-col items-center text-center">
              <i className="icon-shipping text-4xl mb-4"></i>
              <div>
                <h4 className="text-xl font-semibold mb-2">Free Shipping</h4>
                <p>All purchases over $199 are eligible for free shipping via USPS First Class Mail.</p>
              </div>
            </li>
            
            <li className="flex flex-col items-center text-center">
              <i className="icon-payment text-4xl mb-4"></i>
              <div>
                <h4 className="text-xl font-semibold mb-2">Easy Payments</h4>
                <p>All payments are processed instantly over a secure payment protocol.</p>
              </div>
            </li>
            
            <li className="flex flex-col items-center text-center">
              <i className="icon-cash text-4xl mb-4"></i>
              <div>
                <h4 className="text-xl font-semibold mb-2">Money-Back Guarantee</h4>
                <p>If an item arrived damaged or you've changed your mind, you can send it back for a full refund.</p>
              </div>
            </li>
            
            <li className="flex flex-col items-center text-center">
              <i className="icon-materials text-4xl mb-4"></i>
              <div>
                <h4 className="text-xl font-semibold mb-2">Finest Quality</h4>
                <p>Designed to last, each of our products has been crafted with the finest materials.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}

export default IndexPage;
