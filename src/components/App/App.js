import React from 'react';
import './App.css';
import PlanetsService from './../../services/PlanetsService';
import PlanetItem from './../PlanetItem'

class App extends React.Component {
    state = {
        planets: [],
        activePlanet: {}
    };
    pl = new PlanetsService();
    spinner = true;
    allPlanets = async () => {
        let a = await this.pl.request();
        this.setState(({planets}) => {
            return {
                planets: a,
            }
        });
    };

    componentDidMount() {
        this.allPlanets();
    }

    platetItem = () => {
        if (this.state.planets.length > 0) {
            let element = this.state.planets[Math.floor(Math.random() * this.state.planets.length)];
            let id = element.url.match(/\/(\d+)\//)[1];
            return <div key={id[1]}><PlanetItem planet={element} planetId={id}/></div>
        }
        this.spinner = false;
    };

    takeItem = (item) => {
        let a = item;
        this.setState(({activePlanet}) => {
            return (
                this.state.activePlanet=a
            )
        })

    };

    render() {
        let items = this.state.planets.map((item) => {
            let id = item.url.match(/\/(\d+)\//)[1];
            return (
                    <ul className={''}>
                        <li>
                            <button type='button' onClick={
                                this.takeItem.bind(this, item)
                            }>{`Planet ${id}`}</button>
                        </li>
                    </ul>
            )
        });


        return (
            <div>
            <div className="App position-relative">
                <div className={this.spinner ? 'd-block' : 'd-none'}>
                    <div
                        className={'spinner position-absolute w-100 h-100 d-flex align-items-center justify-content-center'}>
                        <i className="fa fa-spinner text-white"></i>
                    </div>
                </div>
                {this.platetItem()}
            </div>

            <div className={'container d-flex'}>
            <div className={'col-6'}>
            {items}
    </div>
    <div className={'col-6'}>{this.state.activePlanet.name}</div>
    </div>
    </div>
        );
    }
}

export default App;
