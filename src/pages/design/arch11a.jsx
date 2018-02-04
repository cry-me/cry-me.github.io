import React from 'react';

import Gallery from '../../components/gallery';

const images = [
  {
    pathPrefix: 'design/arch11a',
    filename: 'darkroomcopy',
    filesuffix: '.jpg',
    caption: 'Caption goes here',
  },
];

const Arch11A = () => (
  <Gallery galleryTitle="Arch11A Project SS18" images={images} />
);

export default Arch11A;
