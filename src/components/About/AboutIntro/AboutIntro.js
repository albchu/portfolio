import React from 'react';
import Plx from 'react-plx';
import { IoMdHand } from 'react-icons/io';

import SectionHeader from '../../SectionHeader';
import AboutIntroText from './AboutIntroText';
import './AboutIntro.css';

const containerParallax = [
  {
    start: '.ColorChange-trigger',
    duration: '180vh',
    properties: [
      {
        startValue: '#00121d',
        endValue: '#EEA583',
        property: 'backgroundColor'
      }
    ]
  }
];

const containerParallax2 = [
  {
    start: '.StickyText-trigger',
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
        <div className="StickyText-trigger" />
        <Plx
          className="AboutIntro__stickyIntro"
          parallaxData={containerParallax2}
        >
          {/* <div className="AboutIntro__stickyIntro"> */}
          <div className="AboutIntro__introContainer">
            <IoMdHand className="AboutIntro__wave" />
            <AboutIntroText />
          </div>
        </Plx>
        {/* </div> */}
      </Plx>
    </>
  );
};

export default AboutIntro;
