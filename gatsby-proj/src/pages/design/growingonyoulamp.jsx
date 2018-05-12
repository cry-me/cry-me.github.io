import React from 'react';

import Gallery from '../../components/gallery';

const images = [
  {
    pathPrefix: 'design/growingonyoulamp',
    filename: '01',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/growingonyoulamp',
    filename: '02',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/growingonyoulamp',
    filename: '03',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/growingonyoulamp',
    filename: '05',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/growingonyoulamp',
    filename: '06',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/growingonyoulamp',
    filename: '07',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
  {
    pathPrefix: 'design/growingonyoulamp',
    filename: '08',
    filesuffix: '.png',
    caption: 'Caption goes here',
  },
];

// <object
//   data="/design/growingonyoulamp/04_slides-3-5.pdf"
//   type="application/pdf"
//   style={{ width: '100%', height: '36em' }}
// >
//   <a href="/design/growingonyoulamp/04_slides-3-5.pdf" target="_blank">Slidedeck</a>
// </object>

const Page = () => (
  <div>
    <h2>Growing On You Lamp</h2>

    <p>
      <a
        href="/design/growingonyoulamp/09_link-to-this.pdf"
        target="_blank"
        className="plain-link"
      >
        ACM Paper
      </a>
    </p>

    <p>
      <a
        href="/design/growingonyoulamp/04_slides-3-5.pdf"
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
