import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const SaveOverTime = () => {
  // Chart data for monthly savings
  const chartData = [
    { month: 'Jan', value: 170 },
    { month: 'Feb', value: 100 },
    { month: 'Mar', value: 130 },
    { month: 'Apr', value: 220 },
    { month: 'May', value: 100 },
    { month: 'Jun', value: 70 },
    { month: 'Jul', value: 90 },
    { month: 'Aug', value: 60 },
    { month: 'Sep', value: 110 },
    { month: 'Oct', value: 80 }
  ];

  return (
    <div 
      className="rounded-2xl py-12 border border-neutral-600"
      style={{ backgroundColor: '#1C1C1C' }}
    >
      {/* Header */}
      <div className="flex items-center mb-6 ml-8">
        <div className="w-6 h-3 bg-blue-500 rounded-full mr-3"></div>
        <h3 className="text-white font-semibold text-lg">Your savings over time</h3>
      </div>
      
      {/* Chart Container */}
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid 
              strokeDasharray="0" 
              stroke="#374151" 
              opacity={0.3}
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              domain={[0, 250]}
              ticks={[0, 50, 100, 150, 200, 250]}
            />
            <Bar 
              dataKey="value" 
              fill="#017FF4"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SaveOverTime;