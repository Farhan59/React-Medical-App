import React from 'react';
import './Result.css';

const Result = () => {
  const mockData = [
    {
      id: 1,
      disease: 'Eczema',
      prediction: '98%',
      description: 'Eczema is a condition that makes your skin red and itchy. It is common in children but can occur at any age.',
      treatment: 'Moisturizers, corticosteroid creams, and avoiding irritants.',
      advice: 'Keep your skin moisturized, avoid triggers, and follow your doctor’s recommendations.',
    },
    {
      id: 2,
      disease: 'Psoriasis',
      prediction: '65%',
      description: 'Psoriasis is a skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk, and scalp.',
      treatment: 'Topical treatments, light therapy, and systemic medications.',
      advice: 'Maintain a healthy lifestyle, manage stress, and adhere to your treatment plan.',
    },
    {
      id: 3,
      disease: 'Acne',
      prediction: '32%',
      description: 'Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It often causes whiteheads, blackheads or pimples.',
      treatment: 'Over-the-counter creams, prescription medications, and avoiding greasy cosmetics.',
      advice: 'Keep your face clean, avoid popping pimples, and use non-comedogenic products.',
    },
  ];

  return (
    <div className="result-page">
      <h2>Skin Diseases Detection Results</h2>
      <div className="results-container">
        {mockData.map((data) => (
          <div key={data.id} className="result-card">
            <h3>{data.disease}</h3>
            <p><strong>Prediction: </strong>{data.prediction}</p>
            <p><strong>Description: </strong>{data.description}</p>
            <p><strong>Treatment: </strong>{data.treatment}</p>
            <p><strong>Advice: </strong>{data.advice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
