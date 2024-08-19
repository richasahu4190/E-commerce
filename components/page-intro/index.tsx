import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  return (
    <section className="relative overflow-hidden">
      <Swiper 
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        effect="fade" 
        className="swiper-container relative text-yellow-400"
      >
        <SwiperSlide>
          <div 
            className="relative h-screen bg-cover bg-center text-gray-800" 
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="text-4xl font-bold mb-4 text-[#EAB308] hover:text-[#1a67e2]">Sale of the summer collection</h2>
                <a 
                  href="#" 
                  className="inline-flex items-center bg-[#1a67e2] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-600"
                >
                  <i className="icon-right mr-2"></i>
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
            className="relative h-screen bg-cover bg-center" 
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="text-center text-white px-6 md:px-12">
                <h2 className="text-4xl font-bold mb-4 text-yellow-500 hover:text-[#1a67e2]">Make your house into a home</h2>
                <a 
                  href="#" 
                  className="inline-flex items-center bg-[#1a67e2] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-600"
                >
                  <i className="icon-right mr-2"></i>
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Custom Next and Prev Buttons */}
        <div className="swiper-button-next swiper-button-next-custom text-gray-500"></div>
        <div className="swiper-button-prev swiper-button-prev-custom text-gray-500"></div>
      </Swiper>

      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-6 md:px-12">
          <ul className="flex flex-wrap justify-between space-y-4 md:space-y-0 md:space-x-6">
            <li className="flex items-center space-x-4">
              <i className="icon-shipping text-3xl text-yellow-500"></i>
              <div className="text-gray-800">
                <h4 className="text-lg font-semibold text-yellow-500">Free Shipping</h4>
                <p>On purchases over $199</p>
              </div>
            </li>
            
            <li className="flex items-center space-x-4">
              <i className="icon-shipping text-3xl text-yellow-500"></i>
              <div className="text-gray-800">
                <h4 className="text-lg font-semibold text-yellow-500">99% Satisfied Customers</h4>
                <p>Our clients' opinions speak for themselves</p>
              </div>
            </li>
            
            <li className="flex items-center space-x-4">
              <i className="icon-cash text-4xl text-yellow-500  -ml-2"></i>
              <div className="text-gray-800">
                <h4 className="text-lg font-semibold text-yellow-500 ">Originality Guaranteed</h4>
                <p>30 days warranty for each product from our store</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
