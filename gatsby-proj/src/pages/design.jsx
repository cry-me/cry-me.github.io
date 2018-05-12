import React from 'react';

import Tiles from '../components/tiles';

const designs = [
  {
    pathPrefix: 'design',
    filename: 'growingonyoulamp',
    filesuffix: '.png',
    caption: 'Growing On You Lamp',
  },
  {
    pathPrefix: 'design',
    filename: 'arch11a',
    filesuffix: '.jpg',
    caption: 'Environmental Design 11A',
  },
  {
    pathPrefix: 'design',
    filename: 'bart',
    filesuffix: '.png',
    caption: 'Bart Kiosk Redesign',
  },
  {
    pathPrefix: 'design',
    filename: 'sfplaza',
    filesuffix: '.jpg',
    caption: 'SF Federal Building Plaza',
  },
];

const DesignPage = () => (
  <div>
    <h2>Design</h2>
    <Tiles projects={designs} />
  </div>
);

export default DesignPage;
