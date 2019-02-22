import React from 'react';
import { FiChevronsDown } from 'react-icons/fi';
import classnames from 'classnames';

const DownButton = ({ className, onClick, flash }) => {
  return (
    <div onClick={onClick}>
      <FiChevronsDown className={classnames(className, flash && 'flash')} />
    </div>
  );
};

export default DownButton;
