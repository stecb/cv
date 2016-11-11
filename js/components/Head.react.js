import React from 'react';
import Helmet from 'react-helmet';

const Head = ({ title, description, section }) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={`${title}'s CV | ${section || 'experience'}`}
    meta={[
      { name: 'description', content: description }
    ]}
  />
);

export default Head;
