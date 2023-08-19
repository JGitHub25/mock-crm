import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Misión',
    Svg: require('@site/static/img/undraw_business_decisions_re_84ag.svg').default,
    description: (
      <>
        Crear y comercializar servicios y productos de excelente calidad en el área informática, para satisfacer las
        necesidades de nuestros clientes, ayudando así al mejoramiento de los procesos empresariales, todo esto rodeado
        de un clima laboral agradable, que fomente el crecimiento personal y profesional tanto de sus clientes internos
        como externos.
      </>
    ),
  },
  {
    title: 'Visión',
    Svg: require('@site/static/img/undraw_code_review_re_woeb.svg').default,
    description: (
      <>
        Posicionarse en el 2025 como la mejor organización para soluciones en informática a nivel nacional, distinguida
        por sus productos y servicios en el mercado con proyección internacional.
      </>
    ),
  },
  {
    title: 'Nuestra Empresa',
    Svg: require('@site/static/img/undraw_meet_the_team_re_4h08.svg').default,
    description: (
      <>
        APLICACIONES INTEGRADAS S.A.S, somos una casa de software con más de 25 años de experiencia en el desarrollo y
        comercialización de aplicaciones para la gestión administrativa, comercial, contable, productora y de recursos
        humanos. Contamos con herramientas de última tecnología para brindar a nuestros clientes desarrollos a su
        medida, según las necesidades que su empresa requiera.{' '}
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
