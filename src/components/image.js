import React, { Component } from 'react';


var ListRender = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.list.map((imagen) => {
          return <img src={imagen} />
        })}
      </div>
    )
  }
})

export default class Image extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("inside the column");
    console.log(this.props.imagenes);
    return (
      <div>
        {JSON.stringify(this.props.imagenes)}
      </div>
    );
  }
}
