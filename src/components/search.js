import React, { Component } from 'react';
import $ from 'jquery';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state={term: ""}
  };

  handleChange(e) {
    var change= {};
    change[e.target.name] = e.target.value
    this.setState(change);
  };

  handleSubmit() {
    $.ajax({
      method: "GET",
      url:"http://localhost:9000/flickr/" + this.state.term,
      cache: false,
      contentType:false,
      processData: false,
      crossDomain: true,
    }).done((data) => {
      console.log(data);
      this.props.ponerImagenes(data);
    }).fail((err) => {
      console.log("Errooooorrrrr", err);
    });
  }

  render() {

    return (
      <div>
        <input type="text" name="term" value={this.state.person_name} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Enviar</button>
      </div>
    );
  }
}
