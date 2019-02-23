import React, { useState, useEffect, useRef } from 'react';
import { IoIosMenu } from 'react-icons/io';
import './Drawer.css';
import classnames from 'classnames';

const Drawer = ({ className, showButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef();
  const buttonRef = useRef();

  const handleClick = event => {
    if (
      !panelRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target) &&
      isOpen
    ) {
      console.log('Drawer is open and clicked away');
      setIsOpen(false);
    } else {
      console.log('Clicked inside the drawer');
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClick, false);

    return () => window.removeEventListener('mousedown', handleClick, false);
  });

  return (
    <div>
      <div ref={buttonRef}>
        <IoIosMenu
          onClick={() => showButton && setIsOpen(true)}
          className={classnames(
            'drawerButtonIcon',
            showButton && 'showButton',
            isOpen && 'drawerOpen'
          )}
        />
      </div>
      <div
        ref={panelRef}
        className={classnames('drawerRightSidePanel', isOpen && 'isOpen')}
      >
        <div className="drawerContents">Coming Soon!</div>
      </div>
    </div>
  );
};

export default Drawer;
