import React from 'react';
import './AboutExperience.css';
import SectionHeader from '../../SectionHeader';
import Mountains from './Mountains';
import AboutExperienceText from './AboutExperienceText';

const AboutExperience = () => {
  return (
    <div className="AboutExperience__container">
      <SectionHeader title="AboutExperience" show={false} />
      <div className="AboutExperience__mountainContainer">
        <AboutExperienceText />
        <Mountains />
      </div>
    </div>
  );
};

export default AboutExperience;
