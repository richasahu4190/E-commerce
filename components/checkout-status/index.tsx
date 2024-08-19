type CheckoutStatusProps = {
  step: string;
}

const CheckoutStatus = ({ step }: CheckoutStatusProps) => {
  return (
    <div className="w-full py-4">
      <ul className="flex justify-between items-center">
        <li className={`flex items-center ${step === 'cart' ? 'text-blue-600' : 'text-gray-400'}`}>
          <i className={`icon-cart text-2xl ${step === 'cart' ? 'bg-blue-200' : 'bg-gray-200'} rounded-full p-2`}></i>
        </li>
        <li className={`flex items-center ${step === 'checkout' ? 'text-blue-600' : 'text-gray-400'}`}>
          <i className={`icon-delivery text-2xl ${step === 'checkout' ? 'bg-blue-200' : 'bg-gray-200'} rounded-full p-2`}></i>
        </li>
      </ul>
    </div>
  )
};

export default CheckoutStatus;
