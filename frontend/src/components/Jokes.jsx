import { useState, useEffect } from 'react';
import axios from 'axios';

function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingInitial, setLoadingInitial] = useState(false); // Loading for first fetch
  const [loadingNext, setLoadingNext] = useState(false);       // Loading for "Next Joke"

  useEffect(() => {
    setLoadingInitial(true);

    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log("Error fetching jokes:", error);
      })
      .finally(() => {
        setLoadingInitial(false);
      });
  }, []);

  const showNextJoke = () => {
    if (jokes.length === 0) return;

    setLoadingNext(true);

    // Simulate loading delay (e.g., 600ms)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % jokes.length);
      setLoadingNext(false);
    }, 600);
  };

  return (
    <section className='border p-4 flex flex-col items-center gap-4 bg-gray-900'>
      <div className="flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-8 h-8 text-teal-200"
  >
    <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
    <path d="M15 10c.552 0 1-.672 1-1.5S15.552 7 15 7s-1 .672-1 1.5.448 1.5 1 1.5zm-6 0c.552 0 1-.672 1-1.5S9.552 7 9 7 8 7.672 8 8.5 8.448 10 9 10zM6.594 14.594a1 1 0 0 0-.031 1.407A7.944 7.944 0 0 0 12 18a7.944 7.944 0 0 0 5.438-1.999 1 1 0 1 0-1.344-1.469A5.95 5.95 0 0 1 12 16a5.95 5.95 0 0 1-4.094-1.594 1 1 0 0 0-1.312.188z" />
  </svg>
  <span className="text-lg font-bold text-teal-200">Jokes</span>
</div>


      {loadingInitial ? (
        <p className='text-gray-500'>Loading jokes...</p>
      ) : (
        jokes.length > 0 && (
          <div className='text-center'>
            <h3 className='text-md font-semibold text-white'>{jokes[currentIndex].setup}</h3>
            <p className='text-md text-gray-200'>" {jokes[currentIndex].punchline} "</p>
          </div>
        )
      )}

      <button
        onClick={showNextJoke}
        disabled={loadingNext || loadingInitial}
        className={`bg-teal-800 text-white px-4 py-2 rounded transition flex items-center justify-center gap-2 ${
          (loadingNext || loadingInitial)
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-teal-600'
        }`}
      >
        {loadingNext ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading...
          </>
        ) : (
          'Next Joke'
        )}
      </button>
    </section>
  );
}

export default Jokes;
