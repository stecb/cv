/**
 *
 * Experience.react.js
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import Section from './Section.react';

const Experience = ({ experience }) => (
  <div className="experience">
    {experience.map(e => (
      <div className="experience-entry" key={e.id}>
        <div className="experience-head">
          <div className="experience-date">{e.from} - {e.to}</div>
          <div className="experience-info">
            <b>{e.company}</b>, {e.location}
            <br />
            <i>{e.title}</i>
          </div>
          <ul className="experience-headlines">
            {e.headlines.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ index: { experience } }) => ({ experience });

export default connect(
  mapStateToProps
)(Section(Experience));

/*
"id": "1",
"from": "10/12/2011",
"to": "10/11/2012",
"location": "Padova",
"company": "Zuchetti",
"title": "Software Engineer",
"headlines": [
  "built something",
  "built something else"
]
*/
