import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import PremiumFeature from 'sections/premium-feature';
import AppFeature from 'sections/app-feature';
import Dashboard from 'sections/dashboard';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';
import Work from 'sections/work'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="ByteBath Labs"
          description="ByteBath Labs is a web development company that specializes in providing IT services for all kinds of business needs."
        />
        <Banner />
        <Support />
        {/* <PremiumFeature /> */}
        {/* <AppFeature /> */}
        {/* <Dashboard /> */}
        {/* <Pricing /> */}
        <Work />
        <Testimonials />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
