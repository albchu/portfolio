import React from 'react';
import classnames from 'classnames';
import './DrawerItem.css';

const DrawerItem = ({ children, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={classnames('drawerItemBasic noselect', className)}
    >
      {children}
    </div>
  );
};

export default DrawerItem;
