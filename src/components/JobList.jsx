import React from 'react';
import JobCard from './JobCard';
import '../index.css';

const JobList = ({ jobs, deleteJob, updateJob }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} deleteJob={deleteJob} updateJob={updateJob} />
      ))}
    </div>
  );
};

export default JobList;