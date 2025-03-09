import React, { useState } from 'react';
import JobList from '../components/JobList';
import SearchFilter from '../components/SearchFilter';
import '../index.css';

const ViewJobs = ({ jobs, deleteJob }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterJobs = (searchTerm) => {
    // Implement filtering logic here
  };

  return (
    <div className="view-jobs">
      <h1>View Job Applications</h1>
      <SearchFilter filterJobs={filterJobs} />
      <JobList jobs={jobs} deleteJob={deleteJob} />
    </div>
  );
};

export default ViewJobs;

