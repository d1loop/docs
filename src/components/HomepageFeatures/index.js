import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Free',
    description: (
      <>
        d1loop is free to use, without any limits like Twitter.
      </>
    ),
  },
  {
    title: 'Open-source',
    description: (
      <>
        All of the web-app files are open-sourced on our repository, so you can fork and try d1loop locally.
      </>
    ),
  },
  {
    title: 'Easy to use',
    description: (
      <>
        Our goal is to give the best UX\UI that will be similar to other known platforms.
      </>
    )
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
