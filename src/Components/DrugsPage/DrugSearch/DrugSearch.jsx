import React, { useState } from 'react';
import './DrugSearch.css';

const DrugSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [drugData, setDrugData] = useState(null);

  const handleSearch = async () => {
    // Replace with your API call or drug search logic
    const data = await fetchDrugData(searchTerm);
    setDrugData(data);
  };

  const fetchDrugData = async (term) => {
    // Simulate an API call
    return {
      name: 'Aspirin',
      uses: 'Pain relief, fever reduction',
      sideEffects: 'Nausea, stomach pain, bleeding',
      dosage: '50-100mg daily',
    };
  };

  return (
    <div className="drug-search-container-1">
      <h2>Drug Search</h2>
      <p>Use the search box below to find information about drugs. For best results, enter the drug name or keywords related to its uses or properties.</p>
      <div className="search-box-1">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a drug..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {drugData && (
        <div className="drug-details">
          <h3>Drug Properties</h3>
          <p><strong>Name:</strong> {drugData.name}</p>
          <p><strong>Uses:</strong> {drugData.uses}</p>
          <p><strong>Side Effects:</strong> {drugData.sideEffects}</p>
          <p><strong>Dosage:</strong> {drugData.dosage}</p>
        </div>
      )}
    </div>
  );
};

export default DrugSearch;
