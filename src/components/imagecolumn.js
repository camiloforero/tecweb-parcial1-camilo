import React, { Component } from 'react';

function getUrl (imagen) {
        return "https://farm"+
            imagen.farm +
            ".staticflickr.com/" +
            imagen.server +
            "/"+
            imagen.id+
            "_" +
            imagen.secret +
            "_s.jpg";
}

var ListRender = React.createClass({
  render: function () {
    return(
      <div>
        {this.props.list.map((imagen) => {
          return <img src={getUrl(imagen)} />
        })}
      </div>
    )
  }
})

export default class ImageColumn extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    console.log("inside the column");
    console.log(this.props.imagenes);
    return (
      <div className="col-sm-1 col-lg-1">
        <ListRender list={this.props.imagenes} />
      </div>
    );
  }
}
