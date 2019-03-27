import React from 'react';
import './AboutExperienceText.css';
import Plx from 'react-plx';

const diffYears = (dt2, dt1 = new Date()) => {
  const diffSecs = (dt2.getTime() - dt1.getTime()) / 1000;
  const diffDays = diffSecs / (60 * 60 * 24);

  return Math.abs(Math.round(diffDays / 365.25));
};

const containerParallax = [
  {
    start: '.AboutExperience-trigger',
    startOffset: '170vh',
    duration: '90vh',
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity'
      }
    ]
  },
  {
    start: '.AboutExperience-trigger',
    startOffset: '220vh',
    duration: '30vh',
    properties: [
      {
        startValue: 0,
        endValue: -100,
        unit: 'vh',
        property: 'translateX'
      }
    ]
  }
];

const AboutExperienceText = () => {
  return (
    <>
      <div className="AboutExperience-trigger" />
      <Plx
        className="AboutExperienceText__container"
        parallaxData={containerParallax}
      >
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
        <div className="AboutExperienceText__Row_5">
          in software development
        </div>
      </Plx>
    </>
  );
};

export default AboutExperienceText;
