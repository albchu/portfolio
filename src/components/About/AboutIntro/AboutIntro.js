import React from 'react';
import Plx from 'react-plx';
import SectionHeader from '../../SectionHeader';
import AboutIntroText from './AboutIntroText';
import './AboutIntro.css';

const containerParallax = [
  {
    start: 2600,
    end: 3100,
    properties: [
      {
        startValue: '#1F5182',
        endValue: '#F3A981',
        property: 'backgroundColor'
      }
    ]
  }
];

const AboutIntro = () => {
  return (
    <Plx className="AboutIntro__container" parallaxData={containerParallax}>
      <SectionHeader title="AboutIntro" show={false} />
      <div className="AboutIntro__stickyIntro">
        <div className="AboutIntro__introContainer">
          <span className="AboutIntro__wave">👋</span>
          <AboutIntroText />
        </div>
      </div>
    </Plx>
  );
};

export default AboutIntro;
