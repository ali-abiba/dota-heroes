import React, {Component} from 'react';
import './navigation-component.css';

export default class NavigationComponent extends Component {

    render() {
        return(
            <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">DotaHeroes</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#heroes">Heroes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pros">Pro Stats</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}