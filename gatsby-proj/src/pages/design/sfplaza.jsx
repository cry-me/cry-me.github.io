import React from 'react';

import Gallery from '../../components/gallery';

const images = [
  {
    pathPrefix: 'design/sfplaza',
    filename: '00',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/sfplaza',
    filename: '01',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/sfplaza',
    filename: '02',
    filesuffix: '.gif',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/sfplaza',
    filename: '03',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/sfplaza',
    filename: '04',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/sfplaza',
    filename: '05',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/sfplaza',
    filename: '06',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/sfplaza',
    filename: '07',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/sfplaza',
    filename: '08',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
];

const Page = () => (
  <div>
    <h2>San Francisco Federal Building Plaza Design Challenge</h2>

    <p>
      <a
        href="/design/sfplaza/finaldeck.pdf"
        target="_blank"
        className="plain-link"
      >
        Slidedeck
      </a>
    </p>

    <Gallery images={images} />
  </div>
);

export default Page;
