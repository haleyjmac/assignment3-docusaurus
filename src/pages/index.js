import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('What did the book club think about our latest read?', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="">
          {siteConfig.title}

          
            
        </Heading>
        A website that covers everything related to our biweekly book club meetings! All of our thoughts will be recorded here for later viewing.

      
          
      </div>
    </header>
  
  );
}

export default function Home() {
  const {siteConfig} = {}
  
  return (
    <Layout
      title={'Biweekly Book Club'}
      tagline={'A place to record all of our book club-related thoughts'}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        Thank you for visiting!
      </main>
    </Layout>
  );
}
