import React from 'react';
import './AboutPassion.css';
import Plx from 'react-plx';

const containerParallax = [
  {
    start: '.AboutPassion-trigger',
    startOffset: '120vh',
    duration: '30vh',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity'
      }
    ]
  }
  // {
  //   start: '.AboutPassion-trigger',
  //   startOffset: '250vh',
  //   duration: '30vh',
  //   properties: [
  //     {
  //       startValue: 0,
  //       endValue: -100,
  //       unit: 'vh',
  //       property: 'translateX'
  //     }
  //   ]
  // }
];
const AboutPassion = () => {
  return (
    <>
      <div className="AboutPassion-trigger" />
      <Plx className="AboutPassion__container" parallaxData={containerParallax}>
        I am passionate about web and UX design.
      </Plx>
    </>
  );
};

export default AboutPassion;
