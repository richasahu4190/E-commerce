import LayoutError from '../layouts/404';

const ErrorPage = () => (
  <LayoutError>
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Error 404</h1>
        <p className="text-lg mb-6">Woops. Looks like this page doesn't exist</p>
        <a href="/" className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600">
          Go to home
        </a>
      </div>
    </section>
  </LayoutError>
);

export default ErrorPage;
