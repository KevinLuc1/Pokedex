import React, {Component} from 'react';
import Pokedex from './Pokedex'

class Pokegame extends Component {
	static defaultProps = {
		pokemon : [
			{id: 1, name: 'Bulbasaur', type: 'grass', base_experience: 25},
			{id: 2, name: 'Ivysaur', type: 'grass', base_experience: 80},
			{id: 3, name: 'Venusaur', type: 'grass', base_experience: 163},
			{id: 4, name: 'Charmander', type: 'fire', base_experience: 23},
			{id: 5, name: 'Charmeleon', type: 'fire', base_experience: 85},
			{id: 6, name: 'Charizard', type: 'fire', base_experience: 177},
			{id: 7, name: 'Squirtle', type: 'water', base_experience: 20},
			{id: 8, name: 'Wartortle', type: 'water', base_experience: 79},
			{id: 9, name: 'Blastoise', type: 'water', base_experience: 153},
			{id: 11, name: 'Metapod', type: 'bug', base_experience: 25},
			{id: 10, name: 'Caterpie', type: 'bug', base_experience: 12},
			{id: 12, name: 'Butterfree', type: 'bug', base_experience: 57},
			{id: 25, name: 'Pikachu', type: 'electric', base_experience: 60},
			{id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 45},
			{id: 94, name: 'Gengar', type: 'poison', base_experience: 150},
			{id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
			{id: 68, name: 'Machamp', type: 'normal', base_experience: 137},
			{id: 123, name: 'Scyther', type: 'grass', base_experience: 144},
			{id: 143, name: 'Snorlax', type: 'water', base_experience: 176},
			{id: 137, name: 'Porygon', type: 'normal', base_experience: 50},
			{id: 129, name: 'Magikarp', type: 'water', base_experience: 4},
			{id: 101, name: 'Electrode', type: 'electric', base_experience: 73},
			{id: 63, name: 'Abra', type: 'psychic', base_experience: 43},
			{id: 65, name: 'Alakazam', type: 'psychic', base_experience: 155}
		]
	}
	render() {
		let hand1 = [];
		let hand2 = [];
		// an array that contains the contents of pokemon array
		let deck = [...this.props.pokemon];

		// draw 4 cards for hand 1
		while(hand1.length < 3){
			// grab a random index from inside the pokemon array
			let randIndex = Math.floor(Math.random() * deck.length);
			console.log(randIndex)
			// take the index and use it to grab the pokemon
			let randPokemon = deck.splice(randIndex, 1)[0];
			hand1.push(randPokemon)
		};
		// draw 4 other cards for hand 2
		while(hand2.length < 3){
			// grab a random index from inside the pokemon array
			let randIndex = Math.floor(Math.random() * deck.length);
			// take the index and use it to grab the pokemon
			let randPokemon = deck.splice(randIndex, 1)[0];
			hand2.push(randPokemon)
		};
		// calculate exp hand 1
		// accumulate base exp of each pokemon and start at 0
		let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
		let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

		return(
			<div>
				<Pokedex pokemon={hand1} exp={exp1} isWinner={exp1>exp2} />
				<Pokedex pokemon={hand2} exp={exp2} isWinner={exp2>exp1} />
			</div>
		)
		
	}
}

export default Pokegame;