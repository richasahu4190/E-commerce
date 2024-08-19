import { useSelector } from 'react-redux';

const CheckoutItems = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <ul className="space-y-4">
      {cartItems.map(item => (
        <li key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 flex-shrink-0">
              <img src={item.thumb} alt={item.name} className="w-full h-full object-cover rounded-lg" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="text-gray-500">#{item.id}</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold">${item.price}</h3>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutItems;
