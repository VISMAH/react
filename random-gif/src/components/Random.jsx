import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = "6GFSJBmH0tChfCm4IL78wQTSmX9HnnGP";

export const Random = () => {
  const [gif, setGif] = useState('');
  const [error, setError] = useState('');

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      const imageSource = response.data.data.images.original.url;
      setGif(imageSource);
      setError('');
    } catch (err) {
      console.error('Error fetching GIF:', err);
      setError('Failed to fetch GIF. Please check your API key or connection.');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-1/2 h-[450px] bg-green-500 rounded-2xl border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl font-bold'>A Random Gif</h1>
      {gif && <img src={gif} alt="random gif" width={450} />}
      {error && <p className='text-red-700'>{error}</p>}
      <button
        onClick={fetchData}
        className='w-10/12 bg-yellow-600 text-lg py-2 rounded-2xl'
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
