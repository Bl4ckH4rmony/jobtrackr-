import React from 'react';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import '../index.css';

const AddJob = ({ addJob, jobs, deleteJob, updateJob }) => {
  return (
    <div className="add-job text-center">
      <h1>Add Job Application</h1>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} updateJob={updateJob} />
    </div>
  );
};

export default AddJob;
