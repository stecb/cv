/**
 *
 * Section.react.js
 * HOC component that holds cv sections (tabs contents)
 *
 *  Why? Because of the "animated fadeIn" shared btw all the diff contents
 *  So, if I want to change something on all these 'wrappers', I just have to
 *  change it here
 *
 */

import React from 'react';

export default function Section(Component) {
  return props => (
    <div className="animated fadeIn">
      <Component {...props} />
    </div>
  );
}
