

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col mb-8 md:mb-0">
            <div className="flex items-center mb-4">
             
              <h6 className="text-xl font-semibold"><span className="text-yellow-500">E</span>-Shop</h6>
            </div>
            <p className="text-gray-300 mb-4 text-sm text-wrap mr-30"> Brand designs clothing  for the fashionable</p>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="icon-facebook"></i></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="icon-twitter"></i></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="icon-linkedin"></i></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="icon-instagram"></i></a></li>
              <li><a href="#" className="text-gray-400 hover:text-white"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <ul className="text-gray-300 space-y-1">
              <li className="font-semibold">Shopping online</li>
              <li><a href="#" className="hover:text-yellow-500 text-sm">Order Status</a></li>
              <li><a href="#" className="hover:text-yellow-500 text-sm">Shipping</a></li>
              <li><a href="#" className="hover:text-yellow-500 text-sm">Contact Us</a></li>
            </ul>
            <ul className="text-gray-300 space-y-1">
              <li className="font-semibold">Information</li>
              <li><a href="#" className="hover:text-yellow-500 text-sm">Gift Cards</a></li>
              <li><a href="#" className="hover:text-yellow-500 text-sm">Find a store</a></li>
            </ul>
            <ul className="text-gray-300 space-y-1">
              <li className="font-semibold">Contact</li>
              <li><a href="#" className="hover:text-yellow-500 text-sm">store@abc.com</a></li>
              <li><a href="#" className="hover:text-yellow-500 text-sm">Hotline: +91 999911XXXX</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 py-3 mt-3 -mb-8">
        <div className=" mx-auto text-center">
          <p className="text-gray-400 text-sm">E-shop © 2024. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
