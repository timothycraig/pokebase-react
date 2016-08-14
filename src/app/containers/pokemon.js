import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class Pokemon extends Component {
  renderPokemon(pokemonData) {
    const name = pokemonData.pokemons[0].name

    return (
      <div>{name}</div>
    );
  }

  renderPokemonImg(pokemonData) {
    const pokemon_id = pokemonData.pokemons[0].id
    const url = "http://pokebase.herokuapp.com/images/full"
    const pokemon_image = `${url}/${pokemon_id}.png`

    return (
      <div><img src={pokemon_image} /></div>
    );
  }

  renderPokemonType(pokemonData) {
    const type = pokemonData.pokemons[0].types[0].name

    return (
      <div>{type}</div>
    );
  }

  render() {
    return (
      <div>
      <Card className="col-md-6">
        <CardText>
        {this.props.pokemon.map(this.renderPokemonImg)}
        </CardText>
      </Card>
      <Card className="col-md-6">
        <CardTitle
          title={this.props.pokemon.map(this.renderPokemon)}
          subtitle={this.props.pokemon.map(this.renderPokemonType)} />
      </Card>
      </div>
    );
  }
}


function mapStateToProps({ pokemon }) {
  return { pokemon }
}

export default connect(mapStateToProps)(Pokemon);
