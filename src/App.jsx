import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/time-log" element={<div>Time Log Content</div>} />
        <Route path="/resource-mgmt" element={<div>Resource Management Content</div>} />
        <Route path="/users" element={<div>Users Content</div>} />
        <Route path="/project-template" element={<div>Project Template Content</div>} />
        <Route path="/menu-settings" element={<div>Menu Settings Content</div>} />
      </Route>
    </Routes>
  );
};

export default App;
