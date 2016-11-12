/**
 *
 * Wrapper.react.js
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Head from './Head.react';

const checkActiveClass = (curr, path) => {
  const arr = ['cv-head-tab'];
  (curr === path) && arr.push('active');
  return arr.join(' ');
};

const Wrapper = ({ head, fullName, children, location }) => (
  <div>
    <Head
      title={fullName}
      description={head.headline}
      section={location.pathname.replace(/\/cv(\/)?/, '')}
    />
    <header className="cv-head">
      <div className="cv-head-top" style={{ backgroundImage: `url(${head.cover})` }}>
        <h1>{fullName}</h1>
        <h2>{head.title}</h2>
      </div>
      <div className="cv-head-box">
        <img className="animated bounceIn" src={head.avatar} alt={fullName} />
        <h4>{head.headline}</h4>
        <div className="cv-head-tags">
          {head.tags.split(',').map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
      <div className="cv-head-tabs container">
        <div className={checkActiveClass('/cv', location.pathname.replace(/\/$/, ''))}>
          <Link to="/cv">Experience</Link>
        </div>
        <div className={checkActiveClass('/cv/education', location.pathname)}>
          <Link to="/cv/education">Education</Link>
        </div>
        <div className={checkActiveClass('/cv/skills', location.pathname)}>
          <Link to="/cv/skills">Skills</Link>
        </div>
      </div>
    </header>
    <section id="main">
      <div className="container">{children}</div>
    </section>
    <footer>
      <div className="container">
        {head.email}
      </div>
    </footer>
  </div>
);

const mapStateToProps = ({ index: { head } }) => ({
  head,
  fullName: `${head.first_name} ${head.last_name}`
});

export default connect(
  mapStateToProps
)(Wrapper);
