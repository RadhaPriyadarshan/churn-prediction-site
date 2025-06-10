import React, { useState } from 'react';

export default function Table({ data }) {
  const [resolved, setResolved] = useState({});
  const [filter, setFilter] = useState('All'); // All, Churn, Not Churn

  const toggle = id => {
    setResolved(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredData = () => {
    if (filter === 'Churn') return data.filter(d => d.Churn === 'Yes');
    if (filter === 'Not Churn') return data.filter(d => d.Churn === 'No');
    // All: churned first, then not churned
    return [...data.filter(d => d.Churn === 'Yes'), ...data.filter(d => d.Churn === 'No')];
  };

  return (
    <div>
      {/* Filter Tabs */}
      <div className="mb-4 flex justify-center gap-2">
        {['All', 'Churn', 'Not Churn'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1 rounded-full border ${
              filter === type ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto ">
        <table className="w-full text-white  bg-gray-900/60 backdrop-blur-sm  shadow-md">
          <thead className="bg-pink-200/5 backdrop-blur-sm shadow-md">
            <tr>
              <th className="p-2 border-b border-gray-700 ">Customer ID</th>
              <th className="p-2 border-b border-gray-700">Churn</th>
              <th className="p-2 border-b border-gray-700">Probability</th>
              <th className="p-2 border-b border-gray-700">Reason</th>
              <th className="p-2 border-b border-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData().map((row, i) => (
              <tr key={i} className={resolved[row.customerID] ? 'bg-green-100/25 backdrop-blur-sm' : ''}>
                <td className="p-2">{row.customerID}</td>
                <td className="p-2">{row.Churn}</td>
                <td className="p-2">{row.Probability}</td>
                <td className="p-2">{row.Reason}</td>
                <td className="p-2">
                  {row.Churn === 'Yes' ? (
                    <button
                      onClick={() => toggle(row.customerID)}
                      className="px-3 py-1 bg-green-600 text-white rounded"
                    >
                      {resolved[row.customerID] ? 'Resolved' : 'Contact & Resolve'}
                    </button>
                  ) : (
                    <span className="text-gray-400 italic">❌</span>
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
