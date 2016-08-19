import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pokemon extends Component {
  renderPokemon(pokemonData) {
    const name = pokemonData.pokemons[0].name

    return name
  }

  renderPokemonType(pokemonData) {
    const type = pokemonData.pokemons[0].types[0].name

    return type
  }

  renderTypeLetter(pokemonData) {
    const first_letter = pokemonData.pokemons[0].types[0].name.charAt(0)

    return first_letter
  }

  renderTypeColor(pokemonData) {
    const type = pokemonData.pokemons[0].types[0].name
    let type_class = ""

    if (type === "Electric") {
      type_class = "mdl-chip__contact mdl-color--yellow mdl-color-text--white"
    } else if (type === "Water") {
      type_class = "mdl-chip__contact mdl-color--blue mdl-color-text--white"
    } else if (type === "Grass" || type === "Bug") {
      type_class = "mdl-chip__contact mdl-color--green mdl-color-text--white"
    } else if (type === "Fire") {
      type_class = "mdl-chip__contact mdl-color--red mdl-color-text--white"
    } else if (type === "Rock" || type === "Ground") {
      type_class = "mdl-chip__contact mdl-color--brown mdl-color-text--white"
    } else if (type === "Psychic") {
      type_class = "mdl-chip__contact mdl-color--deep_purple mdl-color-text--white"
    } else type_class = "mdl-chip__contact mdl-color--grey mdl-color-text--white"

    return type_class
  }

  renderPokemonImg(pokemonData) {
    const pokemon_id = pokemonData.pokemons[0].poke_id
    const img_url = "http://pokebase.herokuapp.com/images/full"
    const pokemon_image = `${img_url}/${pokemon_id}.png`

    return (
      <div><img src={pokemon_image} /></div>
    );
  }

  renderPokemonIcon(pokemonData) {
    const url = pokemonData.pokemons[0].image
    const img_url = `http://pokebase.herokuapp.com/${url}`

    return (
      <div><img src={img_url} /></div>
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
            <th>Defence</th>
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

  render() {
    return (
      <div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--3-col">
          <span className="mdl-chip mdl-chip--contact">
            <span className="mdl-chip__contact">{this.props.pokemon.map(this.renderPokemonIcon)}</span>
            <span className="mdl-chip__text"><h6>{this.props.pokemon.map(this.renderPokemon)}</h6></span>
          </span>&nbsp;
          <span className="mdl-chip mdl-chip--contact">
            <span className={this.props.pokemon.map(this.renderTypeColor)}>{this.props.pokemon.map(this.renderTypeLetter)}</span>
            <span className="mdl-chip__text"><h6>{this.props.pokemon.map(this.renderPokemonType)}</h6></span>
          </span>
        </div>
        <div className="mdl-cell mdl-cell--3-col">
          {this.props.pokemon.map(this.renderPokemonStats)}
        </div>
      </div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--6-col">
          <div className="card-wide mdl-card mdl-shadow--4dp">
            <div className="mdl-card__supporting-text">
              {this.props.pokemon.map(this.renderPokemonImg)}
            </div>
          </div>
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
