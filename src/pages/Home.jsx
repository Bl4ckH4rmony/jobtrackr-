import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to JobTrackr</h1>
      <p>Track your job applications with ease.</p>
      <div className="cta-buttons">
        <Link to="/add-job">Add Job</Link>
        <Link to="/view-jobs">View Jobs</Link>
        <Link to="/statistics">Statistics</Link>
      </div>
    </div>
  );
};

export default Home;