import React from 'react'
import DashboardOverview from '../components/Dashboard/DashboardOverview'
import GaugeChart from '../components/Dashboard/GaugeChart'
import ProjectSummary from '../components/Dashboard/ProjectSummary'

function Dashboard() {
  return (
    <div className="h-full">
      <DashboardOverview />
      <div className="p-6 flex flex-col md:flex-row gap-6">
        <ProjectSummary />
        <GaugeChart />
      </div>
    </div>
  );
}

export default Dashboard;