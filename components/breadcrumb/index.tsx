const Breadcrumb = () => (
  <section className="bg-gray-100 py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul className="flex space-x-2 text-sm text-gray-700">
        <li>
          <a href="#" className="flex items-center text-blue-600 hover:underline">
            <i className="icon-home mr-2"></i>
            Home
          </a>
        </li>
        <li>
          <span>&gt;</span>
        </li>
        <li>All Products</li>
      </ul>
    </div>
  </section>
);

export default Breadcrumb;
