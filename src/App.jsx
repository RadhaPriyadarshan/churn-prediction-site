import React, { useState } from 'react';
import axios from 'axios';
import Table from './components/Table';
import Dashboard from './components/Dashboard';
import VantaBackground from './components/VantaBackground';
import './App.css';

export default function App() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!file) return alert('Please upload a file');
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('https://radhapriyadarshan-telecom-customer-churn-prediction-api.hf.space/predict', formData);
      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden text-white">
      <VantaBackground />

      <nav className="fixed top-0 left-0 w-full bg-gray-900/55 backdrop-blur-md p-4 text-white text-xl font-semibold shadow-md rounded-b-lg z-20">
        Churn Predictor Dashboard
      </nav>

   
      <div className="pt-20 pb-16 overflow-y-auto md:overflow-y-visible h-full">
        <div className="p-6 max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <input
              type="file"
              accept=".csv"
              onChange={e => setFile(e.target.files[0])}
              className="block w-full text-sm bg-gray-900/70 backdrop-blur-md text-white border border-gray-300 cursor-pointer rounded-2xl"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`ml-4 px-4 py-2 rounded ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-pink-800 text-white border border-amber-50 rounded-2xl'
              }`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8z"
                    ></path>
                  </svg>
                  Predicting...
                </span>
              ) : (
                'Predict'
              )}
            </button>
          </div>

          {loading && (
            <div className="text-center text-white font-bold my-4 animate-pulse">
              AI Model is Predicting... please wait 🧠
            </div>
          )}

          {results.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Table data={results} />
              </div>
              <div>
                <Dashboard data={results} />
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 w-full text-center text-gray-400 text-sm bg-gray-900/45 backdrop-blur-sm p-2 z-20">
        © 2025 <span className="font-semibold text-white">Developed by Radha Priyadarshan Jegadeesan</span>. All rights reserved.
      </footer>
    </div>
  );
}
