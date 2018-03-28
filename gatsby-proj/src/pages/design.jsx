import React from 'react';

import Tiles from '../components/tiles';

const designs = [
  {
    pathPrefix: 'design',
    filename: 'arch11a',
    caption: 'ARCH 11A',
  },
];

const DesignPage = () => (
  <Tiles projects={designs} />
);

export default DesignPage;
