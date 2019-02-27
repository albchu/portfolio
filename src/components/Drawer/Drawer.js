import React, { useState, useEffect, useRef } from 'react';
import { IoIosMenu } from 'react-icons/io';
import './Drawer.css';
import classnames from 'classnames';
import DrawerContent from './DrawerContent';

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
    <>
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
        <DrawerContent isOpen={isOpen} onClick={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default Drawer;
