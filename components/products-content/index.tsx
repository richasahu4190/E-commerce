import { useState } from 'react';
import List from './list';

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);

  return (
    <section className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Men's Tops <span className="text-gray-500">(133)</span></h2>
        <button 
          type="button" 
          onClick={() => setOrderProductsOpen(!orderProductsOpen)} 
          className="p-2 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <i className="icon-filters"></i>
        </button>
      </div>
      <form className={`flex flex-col space-y-4 ${orderProductsOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center space-x-4">
          <h4 className="text-sm font-medium">Show products:</h4>
          <div className="relative">
            <select className="block w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500">
              <option>Popular</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <h4 className="text-sm font-medium">Sort by:</h4>
          <div className="relative">
            <select className="block w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500">
              <option>Popular</option>
            </select>
          </div>
        </div>
      </form>
      <List />
    </section>
  );
};

export default ProductsContent;
