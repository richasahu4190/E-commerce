import Layout from '../../layouts/Main';
import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import { RootState } from 'store';

const CheckoutPage = () => {
  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.forEach(item => totalPrice += item.price * item.count);
    }
    return totalPrice;
  });

  return (
    <Layout>
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex space-x-4 mb-6">
                  <button className="btn btn--rounded btn--yellow">Log in</button>
                  <button className="btn btn--rounded btn--border">Sign up</button>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Shipping information</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input className="form__input" type="text" placeholder="Email" />
                      <input className="form__input" type="text" placeholder="Address" />
                      <input className="form__input" type="text" placeholder="First name" />
                      <input className="form__input" type="text" placeholder="City" />
                      <input className="form__input" type="text" placeholder="Last name" />
                      <input className="form__input" type="text" placeholder="Postal code / ZIP" />
                      <input className="form__input" type="text" placeholder="Phone number" />
                      <select className="form__select">
                        <option>Country</option>
                        <option value="Argentina">Argentina</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Payment method</h3>
                <ul className="flex flex-wrap gap-4">
                  <li className="w-16 h-16 flex items-center justify-center bg-gray-50 p-2 rounded-md">
                    <img src="/images/logos/paypal.png" alt="Paypal" />
                  </li>
                  <li className="w-16 h-16 flex items-center justify-center bg-gray-50 p-2 rounded-md">
                    <img src="/images/logos/visa.png" alt="Visa" />
                  </li>
                  <li className="w-16 h-16 flex items-center justify-center bg-gray-50 p-2 rounded-md">
                    <img src="/images/logos/mastercard.png" alt="Mastercard" />
                  </li>
                  <li className="w-16 h-16 flex items-center justify-center bg-gray-50 p-2 rounded-md">
                    <img src="/images/logos/maestro.png" alt="Maestro" />
                  </li>
                  <li className="w-16 h-16 flex items-center justify-center bg-gray-50 p-2 rounded-md">
                    <img src="/images/logos/discover.png" alt="Discover" />
                  </li>
                  <li className="w-16 h-16 flex items-center justify-center bg-gray-50 p-2 rounded-md">
                    <img src="/images/logos/ideal-logo.svg" alt="Ideal" />
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Delivery method</h3>
                <ul className="space-y-4">
                  <li className="flex items-center bg-gray-50 p-4 rounded-md">
                    <img src="/images/logos/inpost.svg" alt="InPost" className="w-12 h-12 mr-4" />
                    <p>$20.00</p>
                  </li>
                  <li className="flex items-center bg-gray-50 p-4 rounded-md">
                    <img src="/images/logos/dpd.svg" alt="DPD" className="w-12 h-12 mr-4" />
                    <p>$12.00</p>
                  </li>
                  <li className="flex items-center bg-gray-50 p-4 rounded-md">
                    <img src="/images/logos/dhl.svg" alt="DHL" className="w-12 h-12 mr-4" />
                    <p>$15.00</p>
                  </li>
                  <li className="flex items-center bg-gray-50 p-4 rounded-md">
                    <img src="/images/logos/maestro.png" alt="Maestro" className="w-12 h-12 mr-4" />
                    <p>$10.00</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Your cart</h3>
              <CheckoutItems />
              
              <div className="mt-6">
                <p className="text-lg font-semibold">Total cost</p>
                <h3 className="text-2xl font-bold">${priceTotal}</h3>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <a href="/cart" className="text-blue-600 hover:underline flex items-center">
              <i className="icon-left mr-2"></i> Back
            </a>
            <div className="flex space-x-4">
              <button type="button" className="btn btn--rounded btn--border">Continue shopping</button>
              <button type="button" className="btn btn--rounded btn--yellow">Proceed to payment</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;
