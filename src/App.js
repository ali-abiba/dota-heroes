import React, { Component } from 'react';
import './App.css';
import HomeComponent from "./home/home.component";
import Background from './assets/home.jpg';
import HeroPopularity from "./heroes/hero.popularity/hero.popularity";


var styles = {
    background: `url(${Background}) no-repeat center center fixed`,
};

class App extends Component {
  render() {
    return (
        <div style={styles}>
            <HomeComponent></HomeComponent>
            <HeroPopularity></HeroPopularity>
        </div>
    );
  }
}

export default App;