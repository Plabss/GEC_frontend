'use client'
import { useState } from 'react';

const countries = ['Australia', 'New Zealand', 'Ireland', 'Canada', 'United Kingdom'];
const accommodations = ['Own apartment', 'Share house'];
const transport = ['Never', 'Rarely', 'Sometimes', 'Often', 'Everyday'];
const socializing = ['Never', 'Once a month', 'Occasionally', 'Every week'];

const CostEstimator = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [accommodation, setAccommodation] = useState('');
  const [transportFrequency, setTransportFrequency] = useState('');
  const [socialFrequency, setSocialFrequency] = useState('');
  const [monthlyCost, setMonthlyCost] = useState(null);

  const calculateCost = () => {
    const cost = 1000; 
    setMonthlyCost(cost);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
        Knowing your costs in simple steps
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Housing Section */}
        <h2 className="text-2xl font-bold mb-4">Housing</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">What country would you like to study in?</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {countries.map((c) => (
              <button
                key={c}
                className={`px-4 py-2 rounded ${country === c ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setCountry(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">What city would you like to live in?</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">What type of accommodation do you prefer?</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {accommodations.map((a) => (
              <button
                key={a}
                className={`px-4 py-2 rounded ${accommodation === a ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setAccommodation(a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Food Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Food</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How often do you eat out each week?</label>
          <div className="mt-2 flex gap-2">
            {[...Array(7).keys()].map((n) => (
              <button
                key={n}
                className="px-4 py-2 rounded bg-gray-200"
              >
                {n + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How much do you spend on food?</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            placeholder="Amount in USD"
          />
        </div>

        {/* Daily Life Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Daily Life</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How often do you use public transport?</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {transport.map((t) => (
              <button
                key={t}
                className={`px-4 py-2 rounded ${transportFrequency === t ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setTransportFrequency(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How often do you go out to socialize with friends?</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {socializing.map((s) => (
              <button
                key={s}
                className={`px-4 py-2 rounded ${socialFrequency === s ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSocialFrequency(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Clothing Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Clothing</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How many items of clothing are you buying a month?</label>
          <div className="mt-2 flex gap-2">
            {[...Array(7).keys()].map((n) => (
              <button
                key={n}
                className="px-4 py-2 rounded bg-gray-200"
              >
                {n + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How much do you spend on new clothes?</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            placeholder="Amount in USD"
          />
        </div>

        <button
          className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded transition-transform transform hover:scale-105"
          onClick={calculateCost}
        >
          Calculate
        </button>

        {monthlyCost !== null && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3 className="text-xl font-bold">Your estimated monthly expense will be:</h3>
            <p className="text-2xl font-extrabold text-gray-900">USD {monthlyCost}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostEstimator;
