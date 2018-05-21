import React, {Component} from 'react';
import './home.component.css';

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="header">
                <div className="content-box">
                    <h1 className="title mx-auto">Welcome to DotaHero, here you can view different statistics on the popular MOBA, DoTA 2.</h1>
                </div>
            </div>
        )
    }
}