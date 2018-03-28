import React from 'react';

import '../styles/tile.css';

class Tile extends React.Component {
  render() {
    const imageStyle = {
      border: '1px solid #FACEE0',
      objectFit: 'cover',
    };

    const captionStyle = {
      width: '100%',
      margin: 0,
    };

    const project = this.props.project;
    const thumbnailPath = `/${project.pathPrefix}/thumbs/${project.filename}.png`;
    const fullDetailsPath = project.filesuffix ? `${project.pathPrefix}/${project.filename}${project.filesuffix}` : `/${project.pathPrefix}/${project.filename}`;

    return (
      <a href={fullDetailsPath}>
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
