import React, {Component} from 'react';
import './hero.popularity.table.css';

export default class HeroPopularityTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pagerData: this.props.heroStats,
            pagerPage: 0,
            pageSize: 10,
            pages: 0,
            pageData: []
        };
        this.getPageData = this.getPageData.bind(this);
        this.pageChanged = this.pageChanged.bind(this);
        this.setPages = this.setPages.bind(this);
        this.getButtons = this.getButtons.bind(this);
    }

    componentDidMount(){
        this.setPages();
        this.getPageData();
    }

    render(){
        if(this.state.pagerData < 1) {
            return null;
        }

        return (
          <div className="hero-table">
              <div className="card w-75 center">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Picks</th>
                            <th scope="col">Bans</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.pageData.map(hero => {
                        return (<tr key={hero.name}>
                            <td><img src={hero.iconUrl} alt={hero.name}></img></td>
                            <td>{hero.name}</td>
                            <td>{hero.proPick}</td>
                            <td>{hero.proBan}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
                  <div className="paginator row mx-auto">
                      {this.getButtons()}
                  </div>
                  <div className="row mx-auto">
                      <p>(double click buttons to change the page)</p>
                  </div>
              </div>
          </div>
        );
    }
    setPages(){
        let pages = Math.ceil((this.state.pagerData.length / this.state.pageSize));
        this.setState({pages: pages}, () =>{
            return;
        });
    }
    pageChanged(e) {
        this.setState({pagerPage: e.target.id}, () =>{
            this.getPageData();
        });
    }
    getPageData(){
        console.log(this.state.pagerPage);

        let start = (this.state.pagerPage * this.state.pageSize);
        let end = start + (this.state.pageSize -1);
        this.state.pageData = this.state.pagerData.slice(start,end);
    }
    getButtons(){
        let buttonNodes = [];

        for(var i = 0; i < this.state.pages; i++){
            buttonNodes.push(
                (
                    <button type="button" className="btn btn-secondary btn-sm" id={i} key={i} onClick={this.pageChanged.bind(this)}>{i + 1}</button>
                )
            )
        }
        return buttonNodes;
    }

}
