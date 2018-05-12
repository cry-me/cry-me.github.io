import React from 'react';

import Gallery from '../../components/gallery';

const images = [
  {
    pathPrefix: 'design/arch11a',
    filename: '01',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/arch11a',
    filename: '02',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/arch11a',
    filename: '03',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/arch11a',
    filename: '04',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/arch11a',
    filename: '05',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/arch11a',
    filename: '06',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/arch11a',
    filename: '07',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/arch11a',
    filename: '08',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/arch11a',
    filename: '09',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
];

const Page = () => (
  <div>
    <h2>Environmental Design 11A</h2>

    <Gallery images={images} />
  </div>
);

export default Page;
