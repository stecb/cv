/**
 *
 * App.react.js
 *
 */

import React from 'react';
import { connect } from 'react-redux';

const Skills = ({ skills }) => (
  <div className="animated fadeIn">
    {skills.map(s => (
      <div key={s.name} className="skill-bar">
        <div
          className="skill-bar-perc"
          style={{ width: `${s.level}%`, backgroundColor: s.bg }}
        />
        <span>{s.name}</span>
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ index: { skills } }) => ({ skills });

export default connect(
  mapStateToProps
)(Skills);
