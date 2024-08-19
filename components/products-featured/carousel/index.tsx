import ProductItem from './../../product-item';
import { ProductTypeList } from 'types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { useEffect, useState } from 'react';

type ProductsCarouselType = {
  products: ProductTypeList[];
};

const ProductsCarousel = ({ products }: ProductsCarouselType) => {
  if (!products) return <div className="text-center py-8">Loading...</div>;

  // Set Swiper configuration based on window width
  const [swiperConfig, setSwiperConfig] = useState({
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 30,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSwiperConfig({
          slidesPerView: 4,
          centeredSlides: false,
          spaceBetween: 65,
        });
      } else if (window.innerWidth > 768) {
        setSwiperConfig({
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 35,
        });
      } else {
        setSwiperConfig({
          slidesPerView: 1.3,
          centeredSlides: true,
          spaceBetween: 30,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="products-carousel py-8">
      <Swiper
        spaceBetween={swiperConfig.spaceBetween}
        loop={true}
        centeredSlides={swiperConfig.centeredSlides}
        watchOverflow={true}
        slidesPerView={swiperConfig.slidesPerView}
        className="swiper-container"
      >
        {products.map(item => (
          <SwiperSlide key={item.id}>
            <ProductItem
              id={item.id}
              name={item.name}
              price={item.price}
              color={item.color}
              discount={item.discount}
              currentPrice={item.currentPrice}
              images={item.images}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
