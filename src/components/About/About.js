import React from 'react';
import './About.css';
import Plx from 'react-plx';
import SectionHeader from '../SectionHeader';
import AboutIntro from './AboutIntro';
import Mountains from './Mountains';

const containerParallax = [
  {
    start: 2600,
    end: 3400,
    properties: [
      {
        startValue: '#1F5182',
        endValue: '#E6BDC1',
        property: 'backgroundColor'
      }
    ]
  }
];

const introParallax = [
  {
    start: 1800,
    end: 3400,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity'
      }
    ]
  }
];

const About = () => {
  return (
    // <div className="About__container">
    <Plx className="About__container" parallaxData={containerParallax}>
      <SectionHeader title="About" show={false} />
      <Plx className="About__stickyIntro" parallaxData={introParallax}>
        <div className="About__introContainer">
          <span className="About__wave">👋</span>
          <AboutIntro />
        </div>
      </Plx>
    </Plx>
    // </div>
  );
};

export default About;
