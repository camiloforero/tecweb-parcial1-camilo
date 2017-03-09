import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Search from './components/search';
import ImageGrid from './components/grid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {image_data:[]}
  }
  render() {



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenido a FlickrRainbow!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Search ponerImagenes={(images) => {this.setState({image_data: images})}}/>
        <ImageGrid />
      </div>
    );
  }
}

export default App;
