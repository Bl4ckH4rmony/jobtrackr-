import React, { useState } from 'react';
import '../index.css';

const SearchFilter = ({ filterJobs }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterJobs(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by company or position"
      value={searchTerm}
      onChange={handleSearch}
      className="search-filter"
    />
  );
};

export default SearchFilter;