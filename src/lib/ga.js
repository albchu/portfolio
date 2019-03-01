import ReactGA from 'react-ga';

const isProduction = process.env.NODE_ENV === 'production';
const empty = () => null;

const initializeGa = () => {
  try {
    ReactGA.initialize('UA-135423584-1', { debug: !isProduction });
  } catch (err) {
    empty(err);
  }
};

const trackNav = (action, label) =>
  ReactGA.event({
    category: 'Navigation',
    action,
    label
  });

export const trackDrawerClick = name => trackNav('Drawer Click', name);
export const trackDirectLink = link => trackNav('Direct Link', link);
export const trackComponentVisible = component =>
  trackNav('Component Visible', component);

initializeGa();
