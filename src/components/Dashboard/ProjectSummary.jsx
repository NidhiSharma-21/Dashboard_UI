import { VictoryPie } from 'victory';
const ProjectSummary = () => {
  const data = [
    {
      name: 'Nelsa web development',
      manager: 'Om prakash sao',
      dueDate: 'May 25, 2023',
      status: 'Completed',
      progress: 100,
    },
    {
      name: 'Datascale AI app',
      manager: 'Neilsan mando',
      dueDate: 'Jun 20, 2023',
      status: 'Delayed',
      progress: 35,
    },
    {
      name: 'Media channel branding',
      manager: 'Tiruvelly priya',
      dueDate: 'July 13, 2023',
      status: 'At risk',
      progress: 68,
    },
    {
      name: 'Corlax iOS app development',
      manager: 'Matte hannery',
      dueDate: 'Dec 20, 2023',
      status: 'Completed',
      progress: 100,
    },
    {
      name: 'Website builder development',
      manager: 'Sukumar rao',
      dueDate: 'Mar 15, 2024',
      status: 'On going',
      progress: 50,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-200 text-green-700';
      case 'Delayed':
        return 'bg-yellow-200 text-yellow-700';
      case 'At risk':
        return 'bg-red-200 text-red-700';
      case 'On going':
        return 'bg-orange-200 text-orange-700';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return '#4CAF50';
    if (progress > 50) return '#FF9800';
    return '#F44336';
  };

  return (
    <div className="p-4 bg-[#F5E9DF] rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Project Summary</h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#E9D6C3] text-left text-sm font-semibold">
              <th className="p-2 whitespace-nowrap">Name</th>
              <th className="p-2 whitespace-nowrap hidden sm:table-cell">Manager</th>
              <th className="p-2 whitespace-nowrap hidden md:table-cell">Due Date</th>
              <th className="p-2 whitespace-nowrap">Status</th>
              <th className="p-2 whitespace-nowrap">Progress</th>
            </tr>
          </thead>
          <tbody>
            {data.map((project, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 text-sm whitespace-nowrap">{project.name}</td>
                <td className="p-2 text-sm whitespace-nowrap hidden sm:table-cell">{project.manager}</td>
                <td className="p-2 text-sm whitespace-nowrap hidden md:table-cell">{project.dueDate}</td>
                <td className="p-2 text-sm whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </td>
                <td className="p-2 text-sm whitespace-nowrap">
                  <div className="relative w-12 h-12">
                    <VictoryPie
                      data={[
                        { x: 1, y: project.progress },
                        { x: 2, y: 100 - project.progress },
                      ]}
                      colorScale={[getProgressColor(project.progress), '#E0E0E0']}
                      innerRadius={16}
                      radius={24}
                      width={48}
                      height={48}
                      padAngle={2}
                      labels={() => null}
                      cornerRadius={5}
                      startAngle={-90}
                      endAngle={270}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                      {`${project.progress}%`}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProjectSummary;
