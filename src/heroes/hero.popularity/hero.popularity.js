import React, {Component} from 'react';
import './hero.popularity.css';
import HeroPopularityTable from "./hero.popularity.table";

const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

export default class HeroPopularity extends Component {
    constructor(props) {
        super(props);
        this.state = {heroStats: ''};
        this.getHeroStats = this.getHeroStats.bind(this);
    }

    componentDidMount() {
        this.getHeroStats();
    }

    render() {
        if (!this.state.heroStats) {
            return null
        }
        return (
            <div className="hero-popularity">
                <div className="most-contested container-fluid">
                    <h1 className="display-2">Most Contested Heroes</h1>
                    <hr/>
                    <div className="top-hero center">
                        <div className="row">
                            <img src={this.state.heroStats[0].imageUrl} className="img-fluid top-hero-image"
                                 alt={this.state.heroStats[0].name}/>
                        </div>
                        <div className="row">
                            <h1 className="center">{this.state.heroStats[0].name}</h1>
                        </div>
                        <div className="row">
                            <h3 className="center"> Picked: {this.state.heroStats[0].proPick} |
                                Banned {this.state.heroStats[0].proBan}</h3>
                        </div>
                    </div>
                    <div className="secondary-hero row">
                        <div className="secondary-card">
                            <img src={this.state.heroStats[1].imageUrl} className="img-fluid lower-hero-image"
                                 alt={this.state.heroStats[1].name}/>
                            <div className="row">
                                <h4>Picked: {this.state.heroStats[1].proPick} |
                                    Banned {this.state.heroStats[1].proBan}</h4>
                            </div>
                        </div>
                        <div className="secondary-card">
                            <img src={this.state.heroStats[2].imageUrl} className="img-fluid lower-hero-image"
                                 alt={this.state.heroStats[2].name}/>
                            <div className="row">
                                <h4>Picked: {this.state.heroStats[2].proPick} |
                                    Banned {this.state.heroStats[2].proBan}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-popularity-table">
                    <HeroPopularityTable heroStats={this.state.heroStats}></HeroPopularityTable>
                </div>
            </div>
        );
    }

    getHeroStats() {
        //Get heroStats data
        axios.get('https://api.opendota.com/api/heroStats', {
            params: {
                api_key: process.env.OPEN_DOTA_KEY
            }
        }).then(response => {
            let data = response.data;
            let heroList = [];
            //Add a hero to the array
            data.forEach(hero => {
                let heroData = new this.HeroStatsData(hero.localized_name, "http://cdn.dota2.com" + hero.img, "http://cdn.dota2.com" + hero.icon, hero.pro_pick, hero.pro_ban);
                heroList.push(heroData);
            });
            //Sort Array
            heroList.sort(this.compare);
            //Add array to state object
            this.setState({heroStats: heroList});
        });
    }

    HeroStatsData(name, imageUrl, iconUrl, proPick, proBan) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.proPick = proPick;
        this.proBan = proBan;
        this.iconUrl = iconUrl;
    }

    compare(a, b) {
        if ((a.proPick + a.proBan) < (b.proPick + b.proBan)) {
            return 1;
        }
        if ((a.proPick + a.proBan) > (b.proPick + b.proBan)) {
            return -1;
        }
        return 0;
    }
}
