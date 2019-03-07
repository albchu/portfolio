import React from 'react';
import './AboutExperience.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import Mountains from './Mountains';

const AboutExperience = () => {
  return (
    <div className="AboutExperience__container">
      <SectionHeader title="AboutExperience" show={false} />
      <div className="AboutExperience__mountainContainer">
        <Mountains />
      </div>
    </div>
  );
};

export default AboutExperience;
