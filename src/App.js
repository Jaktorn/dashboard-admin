// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';
import PostList from './components/PostList';
import ReportBox from './components/ReportBox';
import VipUser from './components/VipUser'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/post-list" element={<PostList />} />
            <Route path="/report-box" element={<ReportBox />} />
            <Route path="/vip-user" element={<VipUser />} /> {/* New route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;