import { useState } from 'react';
import Checkbox from './form-builder/checkbox';
import CheckboxColor from './form-builder/checkbox-color';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Data
import productsTypes from './../../utils/data/products-types';
import productsColors from './../../utils/data/products-colors';
import productsSizes from './../../utils/data/products-sizes';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  };

  return (
    <form className="relative p-4 border border-gray-300 rounded-lg bg-white shadow-md" onChange={addQueryParams}>
      <button 
        type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`flex items-center justify-between w-full px-4 py-2 text-left bg-gray-100 border border-gray-300 rounded-md focus:outline-none ${filtersOpen ? 'bg-gray-200' : ''}`}>
        Add Filter 
        <i className={`ml-2 ${filtersOpen ? 'icon-up-open' : 'icon-down-open'}`}></i>
      </button>

      <div className={`transition-all duration-300 ease-in-out ${filtersOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="mt-4 border-t border-gray-200 pt-4">
          <button type="button" className="block w-full text-left text-lg font-semibold text-gray-700">Product type</button>
          <div className="mt-2 space-y-2">
            {productsTypes.map(type => (
              <Checkbox 
                key={type.id} 
                name="product-type" 
                label={type.name} 
              />
            ))}
          </div>
        </div>

        <div className="mt-4 border-t border-gray-200 pt-4">
          <button type="button" className="block w-full text-left text-lg font-semibold text-gray-700">Price</button>
          <div className="mt-2">
            <Range 
              min={0} 
              max={20} 
              defaultValue={[3, 10]} 
              tipFormatter={value => `${value}%`} 
              className="w-full"
            />
          </div>
        </div>
        
        <div className="mt-4 border-t border-gray-200 pt-4">
          <button type="button" className="block w-full text-left text-lg font-semibold text-gray-700">Size</button>
          <div className="mt-2 flex flex-wrap gap-2">
            {productsSizes.map(type => (
              <Checkbox 
                type="square" 
                key={type.id} 
                name="product-size" 
                label={type.label} 
              />
            ))}
          </div>
        </div>
        
        <div className="mt-4 border-t border-gray-200 pt-4">
          <button type="button" className="block w-full text-left text-lg font-semibold text-gray-700">Color</button>
          <div className="mt-2 flex flex-wrap gap-2">
            {productsColors.map(type => (
              <CheckboxColor 
                key={type.id} 
                valueName={type.color} 
                name="product-color" 
                color={type.color} 
              />
            ))}
          </div>
        </div>

        <button 
          type="submit" 
          className="mt-4 w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
          Apply
        </button>
      </div>
    </form>
  );
};

export default ProductsFilter;
