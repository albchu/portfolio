import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import UpButton from './UpButton';
import './PageUpButton.css';

const PageUpButton = ({ className }) => {
  return (
    <UpButton className={className} onClick={() => scroll.scrollMore(210)} />
  );
};

export default PageUpButton;
