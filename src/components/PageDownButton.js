import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import DownButton from './DownButton';

const PageDownButton = ({ className }) => {
  return (
    <DownButton className={className} onClick={() => scroll.scrollMore(210)} />
  );
};

export default PageDownButton;
