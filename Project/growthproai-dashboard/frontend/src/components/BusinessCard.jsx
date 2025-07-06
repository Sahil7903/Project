import { useContext } from 'react';
import axios from 'axios';
import { BusinessContext } from '../context/BusinessContext';
import Spinner from './Spinner';

export default function BusinessCard() {
  const { data, setData, loading, setLoading } = useContext(BusinessContext);

  if (!data) return null;

  const regenerateHeadline = async () => {
    setLoading(true);
    const res = await axios.get(`http://localhost:4000/regenerate-headline`, {
      params: { name: data.name, location: data.location }
    });
    setData({ ...data, headline: res.data.headline });
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded shadow">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="text-xl font-bold mb-2">{data.name}</h3>
          <p className="text-gray-600 mb-1">{data.location}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-lg">{data.rating}★</span>
            <span className="ml-2 text-gray-700">{data.reviews} reviews</span>
          </div>
          <p className="italic mb-4">{data.headline}</p>
          <button
            onClick={regenerateHeadline}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Regenerate SEO Headline
          </button>
        </>
      )}
    </div>
  );
}
