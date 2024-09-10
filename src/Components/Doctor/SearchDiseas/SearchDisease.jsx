import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchDisease.css';

const SearchDisease = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/DoctorDiseaseResult');
    }, 5000); // 15 seconds delay
  };

  return (
    <div className="search-disease-container">
      <div className="search-box">
        <h2>Search for Disease Symptoms</h2>
        <p>Search for symptoms specifically. To get good results, separate multiple symptoms with commas and search for perfect disease prediction.</p>
        <input
          type="text"
          placeholder="Enter symptoms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {loading && <div className="loading-popup">Analyzing... Please wait.</div>}
      </div>
    </div>
  );
};

export default SearchDisease;
