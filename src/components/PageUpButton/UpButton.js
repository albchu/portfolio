import React from 'react';
import { FiChevronsUp } from 'react-icons/fi';
import classnames from 'classnames';

const UpButton = ({ className, onClick }) => {
  return (
    <div onClick={onClick}>
      <FiChevronsUp className={classnames(className)} />
    </div>
  );
};

export default UpButton;
