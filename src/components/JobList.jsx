import React from 'react';
import JobCard from './JobCard';
import '../index.css';

const JobList = ({ jobs, deleteJob }) => {
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} deleteJob={deleteJob} />
      ))}
    </div>
  );
};

export default JobList;