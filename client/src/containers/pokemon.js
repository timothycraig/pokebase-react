import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pokemon extends Component {

  renderPokemonIcon(pokemonData) {
    const url = pokemonData.pokemons[0].image
    const img_url = `http://localhost:3000/${url}`
    const name = pokemonData.pokemons[0].name

    return (
      <span className="mdl-chip mdl-chip--contact">
        <span className="mdl-chip__contact">
          <img width="75%" src={img_url} />
        </span>
        <span className="mdl-chip__text">
          <h6>{name}</h6>
        </span>
      </span>
    );
  }

  renderPokemonStats(pokemonData) {
    const pokemon_id = pokemonData.pokemons[0].poke_id
    const stamina = pokemonData.pokemons[0].stamina
    const attack = pokemonData.pokemons[0].attack
    const defence = pokemonData.pokemons[0].defence

    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--4dp">
        <thead>
          <tr>
            <th>Poke ID</th>
            <th>Stamina</th>
            <th>Attack</th>
            <th>Defense</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pokemon_id}</td>
            <td>{stamina}</td>
            <td>{attack}</td>
            <td>{defence}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  renderPokemonType(pokemonData) {
    const type = pokemonData.pokemons[0].types
    let type_one = ""
    let type_two = ""
    let type_class = "mdl-chip__contact mdl-color-text--white mdl-color--"
    let type_class_one
    let type_class_two

    if (type.length === 1) {
      type_one = type[0].name
    } else {
      type_one = type[0].name
      type_two = type[1].name
    }

    const indexedCollection = {
      'Electric': `${type_class}yellow`,
      'Water': `${type_class}blue`,
      'Grass': `${type_class}green`,
      'Bug': `${type_class}green`,
      'Poison': `${type_class}green`,
      'Fire': `${type_class}red`,
      'Rock': `${type_class}brown`,
      'Ground': `${type_class}brown`,
      'Psychic': `${type_class}purple`
    }

    type_class_one = indexedCollection[type_one] || `${type_class}grey`
    type_class_two = indexedCollection[type_two] || `${type_class}grey`

    if (type.length === 1) {
      return (
        <span className="mdl-chip mdl-chip--contact">
          <span className={type_class_one}>
            {type_one.charAt(0)}
          </span>
          <span className="mdl-chip__text"><h6>{type_one}</h6></span>
        </span>
      );
    } else {
      return (
        <div>
          <span className="mdl-chip mdl-chip--contact">
            <span className={type_class_one}>
              {type_one.charAt(0)}
            </span>
            <span className="mdl-chip__text"><h6>{type_one}</h6></span>
          </span>&nbsp;
          <span className="mdl-chip mdl-chip--contact">
            <span className={type_class_two}>
              {type_two.charAt(0)}
            </span>
            <span className="mdl-chip__text"><h6>{type_two}</h6></span>
          </span>
        </div>
      );
    }
  }

  renderPokemonImg(pokemonData) {
    const pokemon_id = pokemonData.pokemons[0].poke_id
    const img_url = "http://localhost:3000/images/full"
    const pokemon_image = `${img_url}/${pokemon_id}.png`
    const name = pokemonData.pokemons[0].name

    return (
      <div className="card-wide mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title">
          <h4 className="mdl-card__title-text">{name}</h4>
        </div>
        <div className="mdl-card__supporting-text">
          <img width="60%" src={pokemon_image} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            {this.props.pokemon.map(this.renderPokemonImg)}
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--3-col">
            {this.props.pokemon.map(this.renderPokemonIcon)}&nbsp;
            {this.props.pokemon.map(this.renderPokemonType)}
          </div>
          <div className="mdl-cell mdl-cell--3-col">
            {this.props.pokemon.map(this.renderPokemonStats)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ pokemon }) {
  return { pokemon }
}

export default connect(mapStateToProps)(Pokemon);
