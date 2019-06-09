import React from 'react';
import './PlanetsList.css';

 class PlanetsList extends React.Component {

    render() {
        return(
            <div className={'container d-flex'}>
                <div className={'col-6'}>
                    <ul>
                        {this.props.planesList}
                    </ul>
                </div>
                <div className={'col-6'}>{this.props.planet.name}</div>
            </div>        )
    }
}
export default PlanetsList