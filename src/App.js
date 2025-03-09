import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddJob from './pages/AddJob';
import ViewJobs from './pages/ViewJobs';
import Statistics from './pages/Statistics';
import { initialJobs } from './data'; // Import initial data
import './index.css';

function App() {
  // Load jobs from local storage or use initial data
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem('jobs'); // Get jobs from local storage
    return savedJobs ? JSON.parse(savedJobs) : initialJobs; // Parse the data or use initial data
  });

  // Save jobs to local storage whenever the jobs state changes
  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs)); // Save jobs to local storage
  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (jobToDelete) => {
    setJobs(jobs.filter((job) => job !== jobToDelete));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob addJob={addJob} jobs={jobs} deleteJob={deleteJob} />} />
        <Route path="/view-jobs" element={<ViewJobs jobs={jobs} deleteJob={deleteJob} />} />
        <Route path="/statistics" element={<Statistics jobs={jobs} />} />
      </Routes>
    </Router>
  );
}

export default App;