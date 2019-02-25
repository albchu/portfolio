import React from 'react';
import classnames from 'classnames';
import { animateScroll as scroll } from 'react-scroll';
import UpButton from './UpButton';
import './PageUpButton.css';

const PageUpButton = ({ className, disable }) => {
  return (
    <UpButton
      className={classnames('pageButton', disable && 'disable')}
      onClick={() => !disable && scroll.scrollMore(775)}
    />
  );
};

export default PageUpButton;
