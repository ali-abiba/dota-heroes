import React, { Component } from 'react';
import './App.css';
import HomeComponent from "./home/home.component";
import Background from './assets/home.jpg';
import HeroPopularity from "./heroes/hero.popularity/hero.popularity";

class App extends Component {
  render() {
    return (
        <div className="app-home">
            <HomeComponent></HomeComponent>
            <HeroPopularity></HeroPopularity>
        </div>
    );
  }
}

export default App;