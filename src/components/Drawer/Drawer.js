import React, { useState, useEffect, useRef } from 'react';
import { IoIosMenu } from 'react-icons/io';
import './Drawer.css';
import classnames from 'classnames';
import DrawerItem from './DrawerItem';

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
      setIsOpen(false);
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
        className={classnames(
          'drawerRightSidePanel',
          isOpen && 'isOpen',
          showButton && 'showButton'
        )}
      >
        <div className="drawerContents" onClick={() => setIsOpen(false)}>
          <DrawerItem onClick={() => console.log('close mee22')}>
            About
          </DrawerItem>
          <DrawerItem>Portfolio</DrawerItem>
          <DrawerItem>Social Media</DrawerItem>
          <DrawerItem>Contact</DrawerItem>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
