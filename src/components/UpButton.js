import React from 'react';
import { FiChevronsUp } from 'react-icons/fi';
import classnames from 'classnames';

const UpButton = ({ className, onClick, flash }) => {
  return (
    <div onClick={onClick}>
      <FiChevronsUp className={classnames(className, flash && 'flash')} />
    </div>
  );
};

export default UpButton;
