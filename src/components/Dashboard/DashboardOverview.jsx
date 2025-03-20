import { FaChartBar, FaBriefcase, FaClock, FaUser } from 'react-icons/fa';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const DashboardOverview = () => {
  const data = [
    {
      icon: <FaChartBar className="text-white text-xl" />,
      bgColor: 'bg-purple-500',
      label: 'Total revenue',
      value: '$53,00989',
      change: '12% increase from last month',
      changeType: 'increase',
    },
    {
      icon: <FaBriefcase className="text-white text-xl" />,
      bgColor: 'bg-orange-500',
      label: 'Projects',
      value: '95 /100',
      change: '10% decrease from last month',
      changeType: 'decrease',
    },
    {
      icon: <FaClock className="text-white text-xl" />,
      bgColor: 'bg-blue-500',
      label: 'Time spent',
      value: '1022 /1300 Hrs',
      change: '8% increase from last month',
      changeType: 'increase',
    },
    {
      icon: <FaUser className="text-white text-xl" />,
      bgColor: 'bg-yellow-500',
      label: 'Resources',
      value: '101 /120',
      change: '2% increase from last month',
      changeType: 'increase',
    },
  ];

  return (
    <div className="bg-[#f5e7e1] p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Overview</h2>
        <button className="border px-4 py-2 rounded-full bg-white text-sm shadow-md">
          Last 30 days
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <div
              className={`w-12 h-12 ${item.bgColor} flex items-center justify-center rounded-full mb-4`}
            >
              {item.icon}
            </div>
            <p className="text-gray-500">{item.label}</p>
            <h3 className="text-2xl font-semibold">{item.value}</h3>
            <div className="flex items-center mt-2">
              {item.changeType === 'increase' ? (
                <FiArrowUp className="text-green-500 mr-1" />
              ) : (
                <FiArrowDown className="text-red-500 mr-1" />
              )}
              <p
                className={`text-sm ${
                  item.changeType === 'increase'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {item.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
