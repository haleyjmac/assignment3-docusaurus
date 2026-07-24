import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Have Any Thoughts on Our Latest Read?',
    Svg: require('@site/static/img/undraw_bibliophile_sbt0.svg').default,
    description: (
      <>If you would like to share any thoughts outside of our meetings, comment them here!
      
      </>
    ),
  },
  {
    title: 'Want to Revisit Past Discussions?',
    Svg: require('@site/static/img/undraw_online-articles_g9cg.svg').default,
    description: (
      <>Key takeaways mentioned in our previous meetings will be posted here!
      </>
    ),
  },
  {
    title: 'Want to Recommend our Next Read?',
    Svg: require('@site/static/img/undraw_bookshelves_vhu6.svg').default,
    description: (
      <>
        Comment recommendations and vote on other books! This will help determine our next book club read!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
