import React from 'react';
import Visible from 'react-visibility-sensor';
import { trackComponentVisible } from './ga';

const onComponentVisible = section => isVisible =>
  isVisible && trackComponentVisible(section);

const withVisibility = componentName => BaseComponent => props => (
  <Visible onChange={onComponentVisible(componentName)}>
    <BaseComponent {...props} />
  </Visible>
);

export default withVisibility;
