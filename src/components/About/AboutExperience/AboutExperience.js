import React from 'react';
import './AboutExperience.css';
import SectionHeader from '../../SectionHeader';
import Mountains from './Mountains';
import AboutExperienceText from './AboutExperienceText';
import AboutPassion from './AboutPassion';

const AboutExperience = () => {
  return (
    <>
      <SectionHeader title="AboutExperience" show={false} />
      <div className="AboutExperience__container">
        <AboutExperienceText />
        <AboutPassion />
        <Mountains className="AboutExperience__mountainContainer" />
      </div>
    </>
  );
};

export default AboutExperience;
