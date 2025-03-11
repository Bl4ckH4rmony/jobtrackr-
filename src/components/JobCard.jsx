import React, { useState } from 'react';
import '../index.css';

const JobCard = ({ job, deleteJob, updateJob }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [company, setCompany] = useState(job.company);
  const [position, setPosition] = useState(job.position);
  const [dateApplied, setDateApplied] = useState(job.dateApplied);
  const [status, setStatus] = useState(job.status);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateJob({ ...job, company, position, dateApplied, status });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCompany(job.company);
    setPosition(job.position);
    setDateApplied(job.dateApplied);
    setStatus(job.status);
  };

  return (
    <div className="job-card">
        {isEditing ? (
          <div className="job-form">
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company"
              className="job-form-input"
            />
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Position"
              className="job-form-input"
            />
            <input
              type="date"
              value={dateApplied}
              onChange={(e) => setDateApplied(e.target.value)}
              className="job-form-input"
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="job-form-input">
              <option value="Applied">Applied</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
            <button onClick={handleSave} className="btn-primary">Save</button>
            <button onClick={handleCancel} className="btn-primary">Cancel</button>
          </div>
        ) : (
          <>
            <h3>{job.company}</h3>
            <p>{job.position}</p>
            <p>Applied: {job.dateApplied}</p>
            <p>Status: {job.status}</p>
            <button onClick={() => deleteJob(job)} className="btn-primary">Delete</button>
            <button onClick={handleEdit} className="btn-primary">Edit</button>
          </>
        )}
    </div>
  );
};

export default JobCard;