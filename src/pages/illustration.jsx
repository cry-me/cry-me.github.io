import React from 'react';

import Tiles from '../components/tiles';

const illustrations = [
  {
    pathPrefix: 'illustration',
    filename: 'concentration001',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'illustration',
    filename: 'cryme_coffee_been_processx',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'illustration',
    filename: 'darkroomcopy',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'illustration',
    filename: 'figure',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'illustration',
    filename: 'IMG_8533',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'illustration',
    filename: 'japanesegirlsmall',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'illustration',
    filename: 'templeroom',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
];

const IllustrationPage = () => (
  <Tiles projects={illustrations} />
);

export default IllustrationPage;
