import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import Item from './item';
import { RootState } from 'store';

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const priceTotal = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }
    return totalPrice;
  }

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Shopping Cart</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="bg-white shadow-md rounded-lg">
          {cartItems.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Color</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.map(item => (
                  <Item 
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    size={item.size}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 py-6">Nothing in the cart</p>
          )}
        </div>

        <div className="mt-6 flex flex-col items-center sm:flex-row sm:justify-between">
          <a href="/products" className="text-blue-600 hover:text-blue-800 flex items-center mb-4 sm:mb-0">
            <i className="icon-left mr-2"></i> Continue Shopping
          </a>
          <input 
            type="text" 
            placeholder="Promo Code" 
            className="border border-gray-300 px-4 py-2 rounded-lg mb-4 sm:mb-0" 
          />

          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <p className="text-xl font-semibold mr-4">Total cost <strong>${priceTotal().toFixed(2)}</strong></p>
            <a href="/cart/checkout" className="btn btn--rounded btn--yellow text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600">Checkout</a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ShoppingCart;
