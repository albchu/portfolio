import React from 'react';
import classnames from 'classnames';
import DrawerItem from './DrawerItem';
import { trackDrawerClick } from '../../lib/ga';

const scrollTo = name => () => {
  window.location.hash = `#${name}`;
  trackDrawerClick(name);
};

const DrawerContent = ({ isOpen, onClick }) => {
  return (
    <div
      className={classnames('drawerContents', isOpen && 'isOpen')}
      onClick={onClick}
    >
      <DrawerItem onClick={scrollTo('about')}>About</DrawerItem>
      <DrawerItem onClick={scrollTo('portfolio')}>Portfolio</DrawerItem>
      <DrawerItem onClick={scrollTo('socialmedia')}>Social Media</DrawerItem>
      <DrawerItem onClick={scrollTo('contact')}>Contact</DrawerItem>
    </div>
  );
};

export default DrawerContent;
