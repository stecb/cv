import React from 'react';
import { connect } from 'react-redux';

const Experience = ({ experience }) => (
  <div className="animated fadeIn">
    {experience.map(e => (
      <div key={e.id}>
        {e.company}
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ index: { experience } }) => ({ experience });

export default connect(
  mapStateToProps
)(Experience);
