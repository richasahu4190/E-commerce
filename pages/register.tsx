import Layout from '../layouts/Main';
import Link from 'next/link';

const RegisterPage = () => (
  <Layout>
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/products">
            <a className="flex items-center text-gray-700 hover:text-gray-900">
              <i className="icon-left mr-2"></i> Back to store
            </a>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Create an account and discover the benefits</h2>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          
          <form className="space-y-4">
            <div>
              <input 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                placeholder="First Name" 
                type="text" 
              />
            </div>
            
            <div>
              <input 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                placeholder="Last Name" 
                type="text" 
              />
            </div>
            
            <div>
              <input 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                placeholder="Email" 
                type="text" 
              />
            </div>
            
            <div>
              <input 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                type="password" 
                placeholder="Password" 
              />
            </div>

            <div className="flex items-center mb-6">
              <input 
                name="signed-in" 
                type="checkbox" 
                id="check-signed-in" 
                className="mr-2 leading-tight"
              />
              <label htmlFor="check-signed-in" className="text-gray-700">
                I agree to the Google Terms of Service and Privacy Policy
              </label>
            </div>

            <button 
              type="button" 
              className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
            >
              Sign up
            </button>

            <p className="text-center mt-4">
              <Link href="/login">
                <a className="text-yellow-500 hover:underline">Are you already a member?</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </Layout>
);

export default RegisterPage;
