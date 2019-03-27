import React from 'react';
import Plx from 'react-plx';
import { IoMdHand } from 'react-icons/io';

import SectionHeader from '../../SectionHeader';
import AboutIntroText from './AboutIntroText';
import './AboutIntro.css';

const containerParallax = [
  {
    start: '.ColorChange-trigger',
    startOffset: '60vh',
    duration: '90vh',
    properties: [
      {
        startValue: '#002F4B',
        endValue: '#EEA583',
        property: 'backgroundColor'
      }
    ]
  }
];

const introTextEffect = [
  {
    start: '.AboutIntroText-trigger',
    startOffset: '60vh',
    duration: '50vh',
    properties: [
      {
        startValue: 0.7,
        endValue: 1,
        property: 'scale'
      }
    ]
  },
  {
    start: '.AboutIntroText-trigger',
    startOffset: '20vh',
    duration: '50vh',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity'
      }
    ]
  },
  {
    start: '.AboutIntroText-trigger',
    startOffset: '150vh',
    duration: '30vh',
    properties: [
      {
        startValue: 0,
        endValue: -100,
        unit: 'vh',
        property: 'translateY'
      }
    ]
  }
];

const AboutIntro = () => {
  return (
    <>
      <div className="ColorChange-trigger" />
      <Plx className="AboutIntro__container" parallaxData={containerParallax}>
        <SectionHeader title="AboutIntro" show={false} />
        <div className="AboutIntroText-trigger" />
        <Plx className="AboutIntro__stickyIntro" parallaxData={introTextEffect}>
          <div className="AboutIntro__introContainer">
            <IoMdHand className="AboutIntro__wave" />
            <AboutIntroText />
          </div>
        </Plx>
      </Plx>
    </>
  );
};

export default AboutIntro;
