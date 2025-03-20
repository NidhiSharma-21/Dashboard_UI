import React from 'react';
import { VictoryPie } from 'victory';

const GaugeChart = () => {
  const progress = 72;

  const getColor = (value) => {
    if (value <= 25) return '#2ecc71'; // Green
    if (value <= 50) return '#f1c40f'; // Yellow
    return '#e74c3c'; // Red
  };

  const segments = [
    { x: 1, y: 25, color: getColor(25) },
    { x: 2, y: 25, color: getColor(50) },
    { x: 3, y: 25, color: getColor(75) },
    { x: 4, y: 25, color: getColor(100) },
  ];

  return (
    <div className=" flex-1 w-fit bg-beige p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Overall Progress</h2>
        <button className="bg-gray-200 text-black text-sm px-3 py-1 rounded-md">
          All ▼
        </button>
      </div>

      {/* Fix container height */}
      <div className="relative w-full h-[150px]">
        <VictoryPie
          data={segments}
          innerRadius={70}
          cornerRadius={5}
          padAngle={2}
          startAngle={-90}
          endAngle={90}
          colorScale={segments.map((s) => s.color)}
          labels={() => null}
          width={300}
          height={150} // Reduce height to match container
          padding={0} // Remove extra padding
          style={{
            data: { stroke: '#fff', strokeWidth: 2 },
          }}
        />
        {/* Progress Text */}
        <div className="absolute text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <p className="text-2xl font-bold">{progress}%</p>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
      </div>

      {/* Bottom Values */}
      <div className="flex justify-between text-center mt-2">
        <div>
          <p className="text-lg font-bold">95</p>
        </div>
        <div className="text-green-500">
          <p className="text-lg font-bold">26</p>
        </div>
        <div className="text-yellow-500">
          <p className="text-lg font-bold">35</p>
        </div>
        <div className="text-red-500">
          <p className="text-lg font-bold">35</p>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
