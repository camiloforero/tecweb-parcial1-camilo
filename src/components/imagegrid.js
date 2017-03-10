import React, { Component } from 'react';

import ImageColumn from './imagecolumn';



var ListRender = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.list.map((columna) => {
          return <ImageColumn imagenes={columna} />
        })}
      </div>
    )
  }
})

export default class ImageGrid extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.imagenes);
    return (
      <div className="container-fluid">
        <div className="row">
          <ListRender list={this.props.imagenes} />
        </div>
      </div>
    );
  }
}
