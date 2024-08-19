const ProductItemLoading = () => (
  <a href="#" className="block bg-white border border-gray-200 rounded-lg shadow-md animate-pulse">
    <div className="relative h-64 bg-gray-200 rounded-t-lg">
      {/* Placeholder for image */}
    </div>
    
    <div className="p-4">
      <div className="h-6 bg-gray-200 rounded mb-2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  </a>
);

export default ProductItemLoading;
