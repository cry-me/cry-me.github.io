import React from 'react';

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.galleryTitle}</h2>
        {this.props.images.map(image => (
          <img alt="" src={image} />
        ))}
      </div>
    );
  }
}

export default Gallery;
