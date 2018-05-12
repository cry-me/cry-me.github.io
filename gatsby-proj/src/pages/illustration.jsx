import React from 'react';

import Tiles from '../components/tiles';

const illustrations = [
  {
    pathPrefix: 'illustration',
    filename: 'concentration001',
    filesuffix: '.png',
    caption: '',
    fullSizeSuffix: '.jpg',
  },
  {
    pathPrefix: 'illustration',
    filename: 'cryme_coffee_been_processx',
    filesuffix: '.png',
    caption: '',
    fullSizeSuffix: '.png',
  },
  {
    pathPrefix: 'illustration',
    filename: 'darkroomcopy',
    filesuffix: '.png',
    caption: '',
    fullSizeSuffix: '.jpg',
  },
  {
    pathPrefix: 'illustration',
    filename: 'figure',
    filesuffix: '.png',
    caption: '',
    fullSizeSuffix: '.jpg',
  },
  {
    pathPrefix: 'illustration',
    filename: 'IMG_8533',
    filesuffix: '.png',
    caption: '',
    fullSizeSuffix: '.jpg',
  },
  {
    pathPrefix: 'illustration',
    filename: 'japanesegirlsmall',
    filesuffix: '.png',
    caption: '',
    fullSizeSuffix: '.jpg',
  },
  {
    pathPrefix: 'illustration',
    filename: 'templeroom',
    filesuffix: '.png',
    caption: '',
    fullSizeSuffix: '.jpg',
  },
];

const IllustrationPage = () => (
  <div>
    <h2>Illustrations</h2>
    <Tiles projects={illustrations} />
  </div>
);

export default IllustrationPage;
