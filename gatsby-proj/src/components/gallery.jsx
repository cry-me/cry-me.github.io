import React from 'react';

class Gallery extends React.Component {
  render() {
    const anchorStyle = {
      padding: 0,
    };

    const imageStyle = {
      border: '1px solid #FACEE0',
      objectFit: 'cover',
      width: '100%',
    };

    return (
      <div>
        {this.props.images.map((image) => {
          return (
            <a href={`/${image.pathPrefix}/${image.filename}${image.filesuffix}`} target="_blank" style={anchorStyle}>
              <img alt="" src={`/${image.pathPrefix}/${image.filename}${image.filesuffix}`} style={imageStyle} />
            </a>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
