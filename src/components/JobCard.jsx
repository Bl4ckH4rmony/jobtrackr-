import React from 'react';
import '../index.css';

const JobCard = ({ job, deleteJob }) => {
  return (
    <div className="job-card">
      <h3>{job.company}</h3>
      <p>{job.position}</p>
      <p>Applied: {job.dateApplied}</p>
      <p>Status: {job.status}</p>
      <button onClick={() => deleteJob(job)}>Delete</button>
    </div>
  );
};

export default JobCard;