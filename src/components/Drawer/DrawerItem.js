import React, { useEffect } from 'react';
import classnames from 'classnames';
import './DrawerItem.css';

const DrawerItem = ({ children, onClick, className }) => {
  useEffect(() => console.log('updated'));

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
