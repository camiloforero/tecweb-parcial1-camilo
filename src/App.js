import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Search from './components/search';
import ImageGrid from './components/imagegrid';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_data: [
        [
          {"id":"15998656700","owner":"34797708@N05","secret":"4a60714254","server":"7493","farm":8,"title":"700_5279 Tati the red-nosed reindeer","ispublic":1,"isfriend":0,"isfamily":0},
          {"id":"10267455254","owner":"23812004@N03","secret":"9a5c0ba1f1","server":"7341","farm":8,"title":"Red Panda","ispublic":1,"isfriend":0,"isfamily":0},
          {"id":"5958305615","owner":"49597207@N08","secret":"7c39435e1c","server":"6149","farm":7,"title":"lazy puppy","ispublic":1,"isfriend":0,"isfamily":0}
        ],
        [
          {"id":"6786884107","owner":"25076038@N08","secret":"e83a9806c6","server":"7175","farm":8,"title":"Red","ispublic":1,"isfriend":0,"isfamily":0},
          {"id":"5554376788","owner":"28651237@N00","secret":"022dd4140b","server":"5025","farm":6,"title":"DSC_0867","ispublic":1,"isfriend":0,"isfamily":0},
          {"id":"14454749813","owner":"44128175@N07","secret":"c009383d8e","server":"5529","farm":6,"title":"Red Fox Yawning","ispublic":1,"isfriend":0,"isfamily":0}
        ],
        [
          {"id":"6250213143","owner":"68732830@N06","secret":"6cc226cf61","server":"6157","farm":7,"title":"Red","ispublic":1,"isfriend":0,"isfamily":0},
          {"id":"14267186867","owner":"110044247@N08","secret":"0ebe4daf06","server":"5500","farm":6,"title":"ManchesterTerrier","ispublic":1,"isfriend":0,"isfamily":0},
          {"id":"5505641435","owner":"49170246@N05","secret":"b36162a580","server":"5174","farm":6,"title":"Red Fox","ispublic":1,"isfriend":0,"isfamily":0},
        ]
      ]};
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
        <ImageGrid imagenes={this.state.image_data}/>
      </div>
    );
  }
}

export default App;
