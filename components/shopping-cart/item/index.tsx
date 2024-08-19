import { useDispatch } from 'react-redux';
import { removeProduct, setCount } from 'store/reducers/cart';
import { ProductStoreType } from 'types';

const ShoppingCart = ({ thumb, name, id, color, size, count, price }: ProductStoreType) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeProduct({ thumb, name, id, color, size, count, price }));
  }

  const setProductCount = (count: number) => {
    if (count <= 0) {
      return;
    }

    const payload = {
      product: { thumb, name, id, color, size, count, price },
      count,
    }

    dispatch(setCount(payload));
  }

  return (
    <tr className="border-b border-gray-200">
      <td className="py-4 px-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 flex-shrink-0">
            <img src={thumb} alt={name} className="w-full h-full object-cover rounded-md" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-500">#{id}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-6 text-gray-600" data-label="Color">{color}</td>
      <td className="py-4 px-6 text-gray-600" data-label="Size">{size}</td>
      <td className="py-4 px-6">
        <div className="flex items-center space-x-2">
          <button 
            type="button" 
            onClick={() => setProductCount(count - 1)} 
            className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
          >
            -
          </button>
          <span className="text-gray-800">{count}</span>
          <button 
            type="button" 
            onClick={() => setProductCount(count + 1)} 
            className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4 px-6 text-gray-800">${price}</td>
      <td className="py-4 px-6">
        <button 
          type="button" 
          onClick={() => removeFromCart()} 
          className="text-red-500 hover:text-red-700"
        >
          <i className="icon-cancel text-xl"></i>
        </button>
      </td>
    </tr>
  )
};

export default ShoppingCart;
