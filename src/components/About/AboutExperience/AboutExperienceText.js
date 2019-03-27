import React from 'react';
import './AboutExperienceText.css';

const diffYears = (dt2, dt1 = new Date()) => {
  const diffSecs = (dt2.getTime() - dt1.getTime()) / 1000;
  const diffDays = diffSecs / (60 * 60 * 24);

  return Math.abs(Math.round(diffDays / 365.25));
};

const AboutExperienceText = () => {
  return (
    <div className="AboutExperienceText__container">
      <div className="AboutExperienceText__Row_1">
        Everyday, I strive to apply a
      </div>
      <div className="AboutExperienceText__Row_2">pragmatic & creative</div>
      <div className="AboutExperienceText__Row_3">
        perspective in my career of
      </div>
      <div className="AboutExperienceText__Row_4">
        {diffYears(new Date('June 01 2013'))} years
      </div>
      <div className="AboutExperienceText__Row_5">in software development</div>
    </div>
  );
};

export default AboutExperienceText;
