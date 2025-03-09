import React from 'react';
import '../index.css';

const Dashboard = ({ jobs }) => {
  const statusCounts = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <h2>Application Statistics</h2>
      <p>Total Applications: {jobs.length}</p>
      {Object.entries(statusCounts).map(([status, count]) => (
        <p key={status}>
          {status}: {count}
        </p>
      ))}
    </div>
  );
};

export default Dashboard;