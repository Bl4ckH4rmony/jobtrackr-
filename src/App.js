import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';
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
    setJobs([...jobs, { ...job, id: uuidv4() }]);
  };

    const updateJob = (updatedJob) => {
        setJobs(jobs.map((job) => {
          if (job.id === updatedJob.id) {
            // Check if any of the fields have actually changed
            if (
              job.company !== updatedJob.company ||
              job.position !== updatedJob.position ||
              job.dateApplied !== updatedJob.dateApplied ||
              job.status !== updatedJob.status
            ) {
              return updatedJob; // Return the updated job if changes exist
            }
          }
          return job; // Otherwise, return the original job
        }));
      };
  
    const deleteJob = (jobToDelete) => {
    setJobs(jobs.filter((job) => job.id !== jobToDelete.id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-job" element={<AddJob addJob={addJob} jobs={jobs} deleteJob={deleteJob} updateJob={updateJob} />} />
        <Route path="/view-jobs" element={<ViewJobs jobs={jobs} deleteJob={deleteJob} updateJob={updateJob} />} />
        <Route path="/statistics" element={<Statistics jobs={jobs} />} />
      </Routes>
    </Router>
  );
}

export default App;