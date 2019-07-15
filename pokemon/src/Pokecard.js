import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
// this pokeAPI requires 3 digits, ie: 001, 002, 099, 125

// we take in a number, if number is less than 999, add 0 zeros in front,
// then slice the last 3 digits
// ex:2 becomes 002, then take |002|. or 34 becomes 0034, take 0|034|
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
	render() {
		let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{this.props.name} </h1>
				<div className="Pokecard-image">
					<img src={imgSrc} alt={this.props.name}/>
				</div>
				<div className="Pokecard-data">Type: {this.props.type} </div>	
				<div className="Pokecard-data">EXP: {this.props.exp} </div>	
			</div>


		)
	}
}

export default Pokecard;