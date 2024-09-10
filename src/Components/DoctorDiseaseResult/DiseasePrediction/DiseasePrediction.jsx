import React from 'react';
import './DiseasePrediction.css';

const DiseasePrediction = () => {
    // Dummy data for disease predictions
    const diseasePredictions = [
        { name: 'Flu', percentage: 60 },
        { name: 'Migraine', percentage: 25 },
        { name: 'Sinusitis', percentage: 15 },
    ];

    // Dummy data for detailed disease information
    const detailedDiseases = [
        {
            name: 'Flu',
            description: 'Influenza, commonly known as the flu, is a viral infection...',
            drugs: ['Antiviral medication', 'Rest', 'Fluids'],
        },
        {
            name: 'Migraine',
            description: 'Migraine is a neurological condition characterized by intense...',
            drugs: ['Pain relievers', 'Anti-nausea drugs', 'Triptans'],
        },
    ];

    // Find the disease with the highest percentage
    const highestPrediction = diseasePredictions.reduce((prev, current) =>
        (prev.percentage > current.percentage) ? prev : current
    );

    return (
        <div className="disease-prediction-container">
            <div className="left-side">
                <h2>Predicted Diseases</h2>
                <div className="pie-chart">
                    {/* Display pie chart or list of diseases with percentages */}
                    <ul>
                        {diseasePredictions.map((disease, index) => (
                            <li key={index}>
                                <span className="disease-name">{disease.name}</span>
                                <span className="percentage">{disease.percentage}%</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="highest-prediction">
                    <h3>Highest Prediction:</h3>
                    <p>{highestPrediction.name}</p>
                </div>
            </div>
            <div className="right-side">
                <h2>Detailed Information</h2>
                {detailedDiseases.map((disease, index) => (
                    <div className="disease-details" key={index}>
                        <h3>{disease.name}</h3>
                        <p>{disease.description}</p>
                        <h4>Treatment Recommendations:</h4>
                        <ul>
                            {disease.drugs.map((drug, idx) => (
                                <li key={idx}>{drug}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiseasePrediction;
