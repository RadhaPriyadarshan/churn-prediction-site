import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
 
  Ticks,
} from 'chart.js';



ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard({ data }) {
  const total = data.length;
  const churned = data.filter(d => d.Churn === 'Yes').length;
  const notChurned = total - churned;

  const chartData = {
    labels: ['Churned', 'Not Churned'],
    datasets: [
      {
        label: 'Customers',
        data: [churned, notChurned],
        backgroundColor: ['#dc2626', '#16a34a'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      
      title: {
        display: true,
        text: 'Churn Summary',
        color: "white",
        font: { size: 18 }
      },
    },
    scales: {
        x: {
            ticks:{
                color:"white",
            },
        },
        y:{ ticks:{
                color:"white",
            },
        }
      },
  };

  return (
    <div className="bg-gray-900/70 p-4 rounded shadow-lg text-white backdrop-blur-md">
      <h2 className="text-xl font-semibold mb-2">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-red-100/25 backdrop-blur-sm p-4 rounded text-center">
          <p className="text-2xl font-bold text-red-500">{churned}</p>
          <p className="text-sm">Customers Churned</p>
        </div>
        <div className="bg-green-100/25 backdrop-blur-sm p-4 rounded text-center">
          <p className="text-2xl font-bold text-green-500">{notChurned}</p>
          <p className="text-sm">Retained Customers</p>
        </div>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
}
