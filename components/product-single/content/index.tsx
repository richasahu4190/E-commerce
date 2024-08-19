import { useState } from 'react';
import productsColors from './../../../utils/data/products-colors';
import productsSizes from './../../../utils/data/products-sizes';
import CheckboxColor from './../../products-filter/form-builder/checkbox-color';
import { useDispatch, useSelector } from 'react-redux';
import { some } from 'lodash';
import { addProduct } from 'store/reducers/cart';
import { toggleFavProduct } from 'store/reducers/user';
import { ProductType, ProductStoreType } from 'types';
import { RootState } from 'store';

type ProductContent = {
  product: ProductType;
}

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>('');
  const [itemSize, setItemSize] = useState<string>('');

  const onColorSet = (e: string) => setColor(e);
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(favProducts, productId => productId === product.id);

  const toggleFav = () => {
    dispatch(toggleFavProduct({ id: product.id }));
  }

  const addToCart = () => {
    const productToSave: ProductStoreType = { 
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : '',
      price: product.currentPrice,
      count: count,
      color: color,
      size: itemSize
    }

    const productStore = {
      count,
      product: productToSave
    }

    dispatch(addProduct(productStore));
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h5 className="text-gray-600">Product ID:<br />{product.id}</h5>
        <span className="inline-block bg-red-500 text-white px-2 py-1 text-sm rounded">Sale</span>
        <h2 className="text-2xl font-bold">{product.name}</h2>

        <div className="space-y-1">
          <h4 className="text-lg font-semibold">${product.currentPrice}</h4>
          {product.discount && 
            <span className="text-gray-500 line-through">${product.price}</span>
          }
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h5 className="text-lg font-medium">Color:</h5>
          <div className="flex space-x-2">
            {productsColors.map(type => (
              <CheckboxColor 
                key={type.id} 
                type="radio" 
                name="product-color" 
                color={type.color}
                valueName={type.label}
                onChange={onColorSet} 
              />
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-lg font-medium">Size: <strong className="text-blue-500 cursor-pointer">See size table</strong></h5>
          <div>
            <select onChange={onSelectChange} className="border border-gray-300 rounded p-2">
              <option>Choose size</option>
              {productsSizes.map(type => (
                <option key={type.label} value={type.label}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="text-lg font-medium">Quantity:</h5>
          <div className="flex items-center space-x-2">
            <button 
              type="button" 
              onClick={() => setCount(Math.max(count - 1, 1))} 
              className="bg-gray-200 border border-gray-300 rounded px-4 py-2"
            >
              -
            </button>
            <span className="text-lg">{count}</span>
            <button 
              type="button" 
              onClick={() => setCount(count + 1)} 
              className="bg-gray-200 border border-gray-300 rounded px-4 py-2"
            >
              +
            </button>
          </div>

          <button 
            type="button" 
            onClick={addToCart} 
            className="bg-yellow-500 text-white rounded py-2 px-4 hover:bg-yellow-600"
          >
            Add to cart
          </button>
          <button 
            type="button" 
            onClick={toggleFav} 
            className={`p-2 rounded-full border ${isFavourite ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          >
            <i className="icon-heart"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
