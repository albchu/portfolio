import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import SocialMedia from '../components/SocialMedia';
import Contact from '../components/Contact';
import { trackDirectLink } from '../lib/ga';

const IndexPage = () => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    if (hash) {
      trackDirectLink(hash);
      scroller.scrollTo(hash, {
        offset: -190,
        smooth: true,
        duration: 1500
      });
    }
  });

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `Albert`,
          `Chu`,
          `react`,
          `Full Stack`,
          `Engineer`,
          `Developer`,
          `Software`,
          `Portfolio`
        ]}
      />
      <Header />
      <About />
      <Portfolio />
      <SocialMedia />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
