import React, { Component } from 'react';

export default class ImageGrid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.imagenes);
    return (
      <div>
        <h3>Imágenes</h3>
        {JSON.stringify(this.props.imagenes)}
      </div>
    );
  }
}
