import React from 'react';

import '../styles/tile.css';

class Tile extends React.Component {
  render() {
    const anchorStyle = {
      textTransform: 'none',
      padding: '.5em',
    };

    const imageStyle = {
      border: '1px solid #FACEE0',
      objectFit: 'cover',
    };

    const captionStyle = {
      width: '100%',
      margin: 0,
      visibility: this.props.project.caption ? 'visible' : 'hidden',
    };

    const project = this.props.project;
    const thumbnailPath = `/${project.pathPrefix}/thumbs/${project.filename}${project.filesuffix}`;
    const fullDetailsPath = project.fullSizeSuffix ? `${project.pathPrefix}/${project.filename}${project.fullSizeSuffix}` : `/${project.pathPrefix}/${project.filename}`;

    return (
      <a href={fullDetailsPath} style={anchorStyle}>
        <img
          alt=""
          src={thumbnailPath}
          style={imageStyle}
          className="tile-image"
        />
        <p style={captionStyle}>
          {this.props.project.caption}
        </p>
      </a>
    );
  }
}

export default Tile;
