import React from 'react';
import './BenefitsSection.css';
import { FaRegClock, FaUserMd, FaMoneyBillAlt } from 'react-icons/fa'; // Importing relevant icons

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
      <h2 className="benefits-title">Benefits of Using Our Service</h2>

      <div className="benefits-list">
        <div className="benefit-item">
          <FaRegClock className="benefit-icon" />
          <h3 className="benefit-name">Convenience</h3>
          <p className="benefit-description">Access healthcare services anytime, anywhere.</p>
        </div>
        <div className="benefit-item">
          <FaUserMd className="benefit-icon" />
          <h3 className="benefit-name">Expert Care</h3>
          <p className="benefit-description">Receive expert medical advice and care from qualified professionals.</p>
        </div>
        <div className="benefit-item">
          <FaMoneyBillAlt className="benefit-icon" />
          <h3 className="benefit-name">Cost-effective</h3>
          <p className="benefit-description">Reduce costs associated with traditional healthcare visits.</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
