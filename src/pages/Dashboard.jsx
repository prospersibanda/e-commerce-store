import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import '../Styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='main-content'>
        <SearchBar />
      </div>
    </div>
  );
}

export default Dashboard;
