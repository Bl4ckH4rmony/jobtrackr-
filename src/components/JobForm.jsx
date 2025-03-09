import React, { useState } from 'react';
import '../index.css';

const JobForm = ({ addJob }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [status, setStatus] = useState('Applied');

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob({ company, position, dateApplied, status });
    setCompany('');
    setPosition('');
    setDateApplied('');
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <input
        type="date"
        value={dateApplied}
        onChange={(e) => setDateApplied(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit">Add Application</button>
    </form>
  );
};

export default JobForm;