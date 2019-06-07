import React from 'react'

class PlanetItem extends React.Component{
render() {
    return(
        <section>
            <figure>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${this.props.planetId}.jpg`}
                     alt={this.props.planet.name}/>
            </figure>
        <ul className={'list-unstyled'}>
            <li>{this.props.planet.name}</li>
        </ul>
        </section>
    )
}
}

export default PlanetItem;