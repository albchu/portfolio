import React from 'react';
import Plx from 'react-plx';
import SectionHeader from '../../SectionHeader';
import AboutIntroText from './AboutIntroText';
import './AboutIntro.css';

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
const AboutIntro = () => {
  return (
    <Plx className="AboutIntro__container" parallaxData={containerParallax}>
      <SectionHeader title="AboutIntro" show={false} />
      <Plx className="AboutIntro__stickyIntro" parallaxData={introParallax}>
        <div className="AboutIntro__introContainer">
          <span className="AboutIntro__wave">👋</span>
          <AboutIntroText />
        </div>
      </Plx>
    </Plx>
  );
};

export default AboutIntro;
