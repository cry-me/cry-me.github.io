import React from 'react';

import Gallery from '../../components/gallery';

const images = [
  {
    pathPrefix: 'design/bart',
    filename: '0',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '1',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '2',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '3',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '4',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '5',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '6',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '7',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '8',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '9',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '10',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '11',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '12',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '13',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/bart',
    filename: '14',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
];

const Page = () => (
  <div>
    <h2>BART Kiosk Redesign</h2>

    <Gallery images={images} />
  </div>
);

export default Page;
