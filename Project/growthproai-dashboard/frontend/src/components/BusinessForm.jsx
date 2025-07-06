import { useState, useContext } from 'react';
import axios from 'axios';
import { BusinessContext } from '../context/BusinessContext';

export default function BusinessForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const { setData, setLoading } = useContext(BusinessContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !location) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/business-data', { name, location });
      setData({ ...res.data, name, location });
    } catch (err) {
      setError('Something went wrong.');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Business Dashboard</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Business Name"
          className="w-full p-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Location"
          className="w-full p-3 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
