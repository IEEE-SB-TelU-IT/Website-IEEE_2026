import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import DepartmentsPage from './pages/Departments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/departments" element={<DepartmentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;