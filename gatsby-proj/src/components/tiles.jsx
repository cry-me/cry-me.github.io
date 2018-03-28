import React from 'react';

import Tile from './tile';
import '../styles/tiles.css';

const placeholderImageSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVQI12P4DwABAQEAG7buVgAAAABJRU5ErkJggg==';
const PlaceholderTile = () => (
  <div style={{ padding: '.5em' }}>
    <img
      alt=""
      src={placeholderImageSrc}
      className="tile-image"
    />
  </div>
);

class Tiles extends React.Component {
  render() {
    let placeholder;
    if (this.props.projects.length % 2 === 1) {
      placeholder = (<PlaceholderTile />);
    }

    return (
      <div className="tiles">
        {this.props.projects.map(project => (
          <Tile project={project} />
        ))}
        {placeholder}
      </div>
    );
  }
}

export default Tiles;
