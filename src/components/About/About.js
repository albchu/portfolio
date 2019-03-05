import React from 'react';
import './About.css';
import Plx from 'react-plx';
import SectionHeader from '../SectionHeader';
import AboutIntro from './AboutIntro';

const parallaxData = [
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
    <div className="About__container">
      <SectionHeader title="About" show={false} />
      <Plx className="About__stickyIntro" parallaxData={parallaxData}>
        <div className="About__introContainer">
          <span className="About__wave">👋</span>
          <AboutIntro />
        </div>
      </Plx>
    </div>
  );
};

export default About;
