import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import PageUpButton from '../PageUpButton';
import Drawer from '../Drawer';
import HeaderPortrait from './HeaderPortrait';
import HeaderTitle from './HeaderTitle';
import './header.css';

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
      <HeaderPortrait shrinkHeader={shrinkHeader} />
      <HeaderTitle
        shrinkHeader={shrinkHeader}
        wordIndex={wordIndex}
        descriptors={DESCRIPTORS}
      />
      <div className="header__lockedHeader headerBasic">
        <PageUpButton disable={shrinkHeader} />
        <Drawer showButton={shrinkHeader} />
      </div>
    </>
  );
};

export default Header;
