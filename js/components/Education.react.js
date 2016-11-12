/**
 *
 * Education.react.js
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import Section from './Section.react';

const Education = ({ education }) => (
  <div>
    {education.map(e => (
      <div className="education-entry boxed" key={e.id}>
        <div className="education-head">
          <div className="education-info">
            <b>{e.degree}</b>, {e.institute}
          </div>
          <div className="education-date">{e.from} - {e.to}</div>
          <div className="education-tags">
            {e.tags.split(',').map(t => <span className="tag tag-secondary">{t}</span>)}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ index: { education } }) => ({ education });

export default connect(
  mapStateToProps
)(Section(Education));

/*

"id": "1",
"from": "2004",
"to": "2007",
"institute": "Unipd",
"degree": "BSc Computer Science",
"tags": "Software Engineering, Algorithms, Artificial Intelligence, Web Development, OOP, Distributed programming, Computer Architecture, Computer Security"

*/
