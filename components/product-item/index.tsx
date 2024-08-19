import Link from 'next/link';
import { some } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavProduct } from 'store/reducers/user';
import { RootState } from 'store';
import { ProductTypeList } from 'types';

const ProductItem = ({ discount, images, id, name, price, currentPrice }: ProductTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, productId => productId === id);

  const toggleFav = () => {
    dispatch(toggleFavProduct({ id }));
  };

  return (
    <div className="relative group overflow-hidden bg-white border rounded-lg shadow-md mb-2">
      <div className="relative">
        <button 
          type="button" 
          onClick={toggleFav} 
          className={`absolute top-2 right-2 p-2 rounded-full ${isFavourite ? 'text-red-400' : 'text-gray-400'} hover:text-red-500 transition-colors`}
        >
          <i className="icon-heart text-xl"></i>
        </button>

        <Link href={`/product/${id}`}>
          <a className="block">
            <img 
              src={images ? images[0] : ''} 
              alt={name} 
              className="w-full h-64 object-cover rounded-t-lg"
            />
            {discount && 
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {discount}%
              </span>
            }
          </a>
        </Link>
      </div>
      
      <div className="p-4">
  <h3 className="text-lg font-semibold mb-2 p-2">{name}</h3>
  <div className={`text-gray-800 ${discount ? 'line-through' : ''}`}>
    <h4 className="text-xl font-bold inline">${currentPrice}</h4>
    {discount && (
      <span className="text-gray-500 text-sm ml-2">${price}</span>
    )}
  </div>
</div>
</div>
  );
};

export default ProductItem;
