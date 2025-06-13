import React, { useState } from 'react';

export default function Table({ data }) {
  const [resolved, setResolved] = useState({});
  const [filter, setFilter] = useState('All');

  const toggle = id => {
    setResolved(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredData = () => {
    if (filter === 'Churn') return data.filter(d => d.Churn === 'Yes');
    if (filter === 'Not Churn') return data.filter(d => d.Churn === 'No');
    return [...data.filter(d => d.Churn === 'Yes'), ...data.filter(d => d.Churn === 'No')];
  };

  return (
    <div className="rounded-lg shadow-md">
      
      <div className="mb-4 flex justify-center gap-2 flex-wrap">
        {['All', 'Churn', 'Not Churn'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1 rounded-full border text-sm sm:text-base ${
              filter === type ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      
      <div className="w-full overflow-x-auto rounded-lg">
        <table className="min-w-[700px] w-full text-white bg-gray-900/60 backdrop-blur-sm shadow-md text-xs sm:text-sm md:text-base">
          <thead className="sticky top-0 bg-gray-800 z-10 text-white">
            <tr>
              <th className="p-2 border-b border-gray-700 text-left">Customer ID</th>
              <th className="p-2 border-b border-gray-700 text-left">Churn</th>
              <th className="p-2 border-b border-gray-700 text-left">Probability</th>
              <th className="p-2 border-b border-gray-700 text-left">Reason</th>
              <th className="p-2 border-b border-gray-700 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData().map((row, i) => (
              <tr key={i} className={resolved[row.customerID] ? 'bg-green-100/25 backdrop-blur-sm' : ''}>
                <td className="p-2 align-top break-words">{row.customerID}</td>
                <td className="p-2 align-top">{row.Churn}</td>
                <td className="p-2 align-top">{row.Probability}</td>
                <td className="p-2 align-top whitespace-pre-line break-words">{row.Reason}</td>
                <td className="p-2 align-top">
                  {row.Churn === 'Yes' ? (
                    <button
                      onClick={() => toggle(row.customerID)}
                      className="px-3 py-1 bg-green-600 text-white rounded text-xs sm:text-sm"
                    >
                      {resolved[row.customerID] ? 'Resolved' : 'Contact & Resolve'}
                    </button>
                  ) : (
                    <span className="text-pink-500 text-lg">❌</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
