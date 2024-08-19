import Rater from 'react-rater';
import { PunctuationType } from 'types';

const Punctuation = ({ votes, punctuation, countOpinions }: PunctuationType) => {
  const percentageBar = (count: number) => {
    return (count * 100) / countOpinions;
  };

  return (
    <section className="product-punctuation p-6 bg-white rounded-lg shadow-lg">
      {/* Values Section */}
      <div className="product-punctuation__values mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">{punctuation}</h3>
        <Rater total={5} interactive={false} rating={punctuation}  />
        <p className="text-gray-600 flex items-center">
          <i className="icon-avatar mr-2"></i>
          {countOpinions} all opinions
        </p>
      </div>

      {/* Ratings Section */}
      <div className="product-punctuation__rates mb-6">
        <ul className="space-y-4">
          {votes.map((vote) => (
            <li key={vote.count} className="flex items-center space-x-4">
              <Rater total={1} interactive={false} rating={1}  />
              <span className="text-gray-800">{vote.value}</span>
              <div className="flex-1 bg-gray-200 h-2 rounded-full relative">
                <div
                  style={{ width: percentageBar(vote.count) + '%' }}
                  className="absolute top-0 left-0 bg-yellow-500 h-full rounded-full"
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <div className="punctuation-btn-wrapper">
        <button type="button" className="btn btn--rounded bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Add opinion
        </button>
      </div>
    </section>
  );
};

export default Punctuation;
