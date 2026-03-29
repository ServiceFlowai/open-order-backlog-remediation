import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RulesPage from './pages/RulesPage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </div>
  );
}

export default App;