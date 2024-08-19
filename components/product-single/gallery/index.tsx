type GalleryProductType = {
  images: string[];
}

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images[0];

  return (
    <section className="product-gallery flex flex-col lg:flex-row">
      {/* Thumbnails */}
      <div className="product-gallery__thumbs flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 overflow-x-auto lg:overflow-x-hidden">
        {images.map((image) => (
          <div key={image} className="product-gallery__thumb cursor-pointer">
            <img src={image} alt="" className="object-cover w-20 h-20 lg:w-24 lg:h-24 rounded-md shadow-md" />
          </div>
        ))}
      </div>

      {/* Featured Image */}
      <div className="product-gallery__image flex-1">
        <img src={featImage} alt="" className="object-cover w-full h-full rounded-md shadow-lg" />
      </div>
    </section>
  );
};

export default Gallery;
