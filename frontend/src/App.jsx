import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventsPage from './pages/Events';      // /news → Events page
import Achievements from './pages/Achievements';
import DepartmentsPage from './pages/Departments';
import DepartmentDetail from './pages/DepartmentDetail';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"                element={<Home />}            />
        <Route path="/news"            element={<EventsPage />}      />
        <Route path="/achievements"    element={<Achievements />}    />
        <Route path="/departments"     element={<DepartmentsPage />} />
        <Route path="/departments/:id" element={<DepartmentDetail />}/>
        <Route path="/admin/login"     element={<AdminLogin />}      />
        <Route path="/admin"           element={<AdminDashboard />}  />
      </Routes>
    </Router>
  );
}

export default App;
