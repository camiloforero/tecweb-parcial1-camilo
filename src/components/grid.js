import React, { Component } from 'react';
import $ from 'jquery';

export default class Grid extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    
    return (
      <div>
        {this.props.images}
      </div>
    );
  }
}
