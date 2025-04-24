import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EntriesPage from './pages/EntriesPage';
import ComposerPage from './pages/ComposerPage';
import { SplashGate } from './pages/SplashGate';
import { LoginPage } from './pages/LoginPage';
import { GoalPage } from './pages/GoalPage';
import { ContentLab } from './pages/ContentLab';
import { Settings } from './pages/Settings';

const App = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/journals" />} />
        <Route path="/journals" element={<Dashboard />} />
        <Route path="/journals/:jid" element={<EntriesPage />} />
        <Route path="/compose/:jid" element={<ComposerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/goals" element={<GoalPage />} />
        <Route path="/content/:entry" element={<ContentLab />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
