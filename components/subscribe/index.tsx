const Subscribe = () => {
  return (
    <section className="relative bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="relative bg-cover bg-center rounded-lg py-12 px-8 flex flex-col items-center text-center text-white">
          {/* Blurred background image */}
          <div
            style={{
              backgroundImage: 'url(/images/subscribe.jpg)',
            }}
            className="absolute inset-0 bg-cover bg-center filter blur-xs rounded-lg"
          ></div>
          
          {/* Overlay to darken the background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          {/* Content on top of the blurred background */}
          <div className="relative z-10">
            <h4 className="text-xl font-semibold mb-6 text-yellow-400">
              Subscribe to our newsletter and receive exclusive offers every week
            </h4>

            <form className="flex flex-col md:flex-row items-center gap-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a67e2]"
              />
              <button 
                type="submit" 
                className="bg-[#1a67e2] text-white py-3 px-6 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
