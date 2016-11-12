/**
 *
 * Skills.react.js
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import Section from './Section.react';

const bgs = ['#5cb85c', '#f0ad4e', '#e01945'];

const setBg = level => bgs[level <= 30 ? 2 : level <= 70 ? 1 : 0] // eslint-disable-line

const Skills = ({ skills }) => (
  <div>
    {skills.list.map(s => (
      <div key={s.name} className="skill-bar">
        <div
          className="skill-bar-perc"
          style={{ width: `${s.level}%`, backgroundColor: setBg(~~s.level) }}
        />
        <span>{s.name}</span>
      </div>
    ))}
    {skills.extra &&
      <div className="skills-extra">
        {skills.extra}
      </div>
    }
  </div>
);

const mapStateToProps = ({ index: { skills } }) => ({ skills });

export default connect(
  mapStateToProps
)(Section(Skills));

/*
list: [
  {
    name,
    level
  }
],
extra
*/
