import React, { useRef } from 'react';
import './TestimonialsSection.css';

const doctorTestimonials = [
  {
    name: 'Dr. Emily Clarke',
    feedback: 'This platform has revolutionized the way I interact with my patients. The video consultation feature is extremely convenient and efficient.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Dr. James Lee',
    feedback: 'The symptom search tool helps me quickly identify patient needs and provide accurate diagnoses. It’s a great addition to my practice.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Dr. Sarah Wilson',
    feedback: 'Being able to manage appointments and consult with patients online has saved so much time. This platform is a must-have for any modern practice.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Dr. Emily Clarke',
    feedback: 'This platform has revolutionized the way I interact with my patients. The video consultation feature is extremely convenient and efficient.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Dr. James Lee',
    feedback: 'The symptom search tool helps me quickly identify patient needs and provide accurate diagnoses. It’s a great addition to my practice.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Dr. Sarah Wilson',
    feedback: 'Being able to manage appointments and consult with patients online has saved so much time. This platform is a must-have for any modern practice.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Dr. Emily Clarke',
    feedback: 'This platform has revolutionized the way I interact with my patients. The video consultation feature is extremely convenient and efficient.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Dr. James Lee',
    feedback: 'The symptom search tool helps me quickly identify patient needs and provide accurate diagnoses. It’s a great addition to my practice.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Dr. Sarah Wilson',
    feedback: 'Being able to manage appointments and consult with patients online has saved so much time. This platform is a must-have for any modern practice.',
    avatar: 'https://via.placeholder.com/100',
  },
];

const patientTestimonials = [
  {
    name: 'John Doe',
    feedback: 'The online consultation was quick and easy. The doctor was very professional and helped me understand my symptoms better. Highly recommend!',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Jane Smith',
    feedback: 'I was able to book an appointment and get a diagnosis without leaving my house. The video call feature is a game changer!',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Michael Johnson',
    feedback: 'The symptom search feature helped me find the right specialist for my condition. The whole process was seamless.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'John Doe',
    feedback: 'The online consultation was quick and easy. The doctor was very professional and helped me understand my symptoms better. Highly recommend!',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Jane Smith',
    feedback: 'I was able to book an appointment and get a diagnosis without leaving my house. The video call feature is a game changer!',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Michael Johnson',
    feedback: 'The symptom search feature helped me find the right specialist for my condition. The whole process was seamless.',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'John Doe',
    feedback: 'The online consultation was quick and easy. The doctor was very professional and helped me understand my symptoms better. Highly recommend!',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Jane Smith',
    feedback: 'I was able to book an appointment and get a diagnosis without leaving my house. The video call feature is a game changer!',
    avatar: 'https://via.placeholder.com/100',
  },
  {
    name: 'Michael Johnson',
    feedback: 'The symptom search feature helped me find the right specialist for my condition. The whole process was seamless.',
    avatar: 'https://via.placeholder.com/100',
  },
];

const TestimonialsSection = () => {
  const testimonialsListRef = useRef(null);

  const scrollLeft = () => {
    if (testimonialsListRef.current) {
      testimonialsListRef.current.scrollLeft -= 250; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (testimonialsListRef.current) {
      testimonialsListRef.current.scrollLeft += 250; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">What Our Users Say</h2>
      
      <div className="testimonials-subsection">
        <h3 className="subsection-title">Doctors</h3>
        <div className="testimonials-list horizontal-scroll" ref={testimonialsListRef}>
          {doctorTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} className="testimonial-avatar" />
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
        <div className="arrow arrow-left" onClick={scrollLeft}>{'<'}</div>
        <div className="arrow arrow-right" onClick={scrollRight}>{'>'}</div>
      </div>

      <div className="testimonials-subsection">
        <h3 className="subsection-title">Patients</h3>
        <div className="testimonials-list horizontal-scroll" ref={testimonialsListRef}>
          {patientTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} className="testimonial-avatar" />
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
        <div className="arrow arrow-left" onClick={scrollLeft}>{'<'}</div>
        <div className="arrow arrow-right" onClick={scrollRight}>{'>'}</div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
