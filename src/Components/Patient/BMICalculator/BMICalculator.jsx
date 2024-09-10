import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    if (heightFeet === '' || heightInches === '' || weight === '') {
      alert('Please enter all fields');
      return;
    }

    const heightInMeters = ((parseInt(heightFeet) * 12) + parseInt(heightInches)) * 0.0254;
    const weightInKg = parseFloat(weight);
    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setResult('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setResult('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setResult('Overweight');
    } else {
      setResult('Obesity');
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <div className="input-container">
          <label htmlFor="heightFeet">Height (Feet)</label>
          <input
            type="number"
            id="heightFeet"
            value={heightFeet}
            onChange={(e) => setHeightFeet(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="heightInches">Height (Inches)</label>
          <input
            type="number"
            id="heightInches"
            value={heightInches}
            onChange={(e) => setHeightInches(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>
      <button className="calculate-button" onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
