import React from 'react';
import { connect } from 'react-redux';

const Education = ({ education }) => (
  <div className="animated fadeIn">
    {education.map(e => (
      <div key={e.id}>
        {e.institute}
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ index: { education } }) => ({ education });

export default connect(
  mapStateToProps
)(Education);
