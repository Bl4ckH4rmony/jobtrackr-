import React from 'react';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import '../index.css';

const AddJob = ({ addJob, jobs, deleteJob }) => {
  return (
    <div className="add-job">
      <h1 style={{ textAlign: 'center' }}>Add Job Application</h1>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} />
    </div>
  );
};

export default AddJob;
