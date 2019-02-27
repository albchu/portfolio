/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { scroller } from 'react-scroll';
import classnames from 'classnames';
import DrawerItem from './DrawerItem';

const scrollTo = name => () =>
  scroller.scrollTo(name, {
    smooth: true,
    offset: -180
  });

const DrawerContent = ({ isOpen, onClick }) => {
  return (
    <div
      className={classnames('drawerContents', isOpen && 'isOpen')}
      onClick={onClick}
    >
      <DrawerItem onClick={scrollTo('AboutSection')}>About</DrawerItem>
      <DrawerItem onClick={scrollTo('PortfolioSection')}>Portfolio</DrawerItem>
      <DrawerItem onClick={scrollTo('SocialMediaSection')}>
        Social Media
      </DrawerItem>
      <DrawerItem onClick={scrollTo('ContactSection')}>Contact</DrawerItem>
    </div>
  );
};

export default DrawerContent;
