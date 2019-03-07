import React, { useEffect, useState } from 'react';
import './header.css';
import Fade from 'react-reveal/Fade';
import classnames from 'classnames';
import { animateScroll } from 'react-scroll';
import Portrait from '../portrait';
import PageUpButton from '../PageUpButton';
import Drawer from '../Drawer';
import Rolladex from '../Rolladex';

const SHRINK_THRESHOLD = 300;

const DESCRIPTORS = ['Node.js', 'React', 'UX', 'Full Stack Developer'];

const onScroll = (setShrinkHeader, setWordIndex) => () => {
  const scrolled = window.scrollY;

  console.log('You have scrolled', scrolled);
  if (scrolled < SHRINK_THRESHOLD) {
    setShrinkHeader(false);
  } else if (scrolled >= SHRINK_THRESHOLD) {
    setShrinkHeader(true);
  }
  const wordIndex = Math.floor(scrolled / 200);

  wordIndex < DESCRIPTORS.length && setWordIndex(wordIndex);
};

const Header = () => {
  const [shrinkHeader, setShrinkHeader] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const handleScroll = onScroll(setShrinkHeader, setWordIndex);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <div className={classnames('header__longHeader', 'headerBasic')} />
      <div
        className={classnames(
          'header__portraitContainer',
          shrinkHeader && 'shrink'
        )}
      >
        <div
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          <Fade>
            <Portrait />
          </Fade>
        </div>
      </div>

      <div
        className={classnames(
          'header__titleContainer noselect',
          shrinkHeader && 'shrink'
        )}
      >
        <Fade>
          <div className="header__name">Albert Chu</div>
        </Fade>
        <Rolladex
          className="header__rolladex"
          words={DESCRIPTORS}
          wordIndex={wordIndex}
        />
      </div>
      <div className="header__lockedHeader headerBasic">
        <PageUpButton disable={shrinkHeader} />
        <Drawer showButton={shrinkHeader} />
      </div>
    </>
  );
};

export default Header;
