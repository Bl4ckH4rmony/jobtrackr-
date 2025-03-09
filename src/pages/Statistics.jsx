import React from 'react';
import Dashboard from '../components/Dashboard';
import '../index.css';

const Statistics = ({ jobs }) => {
  return (
    <div className="statistics">
      <h1>Application Statistics</h1>
      <Dashboard jobs={jobs} />
    </div>
  );
};

export default Statistics;

