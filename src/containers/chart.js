import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { connect } from 'react-redux';

class MovesChart extends Component {

  renderPokemonMoves(pokemonData) {
    let moveData = [['Ability', 'Power',{"role":"style"}]]
    const moves = pokemonData.pokemons[0].moves

    for (var i = 0; i < moves.length; i++) {
      moveData.push([moves[i].name, moves[i].power, "#ffc107"])
    }

    return (
      <div className="card-graph mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title">
          <h4 className="mdl-card__title-text">Abilities</h4>
        </div>
        <Chart
          chartType = "BarChart"
          data = { moveData }
          options = {{
            hAxis: {title: 'Power', minValue: 0, maxValue: 100},
            vAxis: {title: 'Ability', minValue: 0, maxValue: 100},
            legend: 'none'
          }}
          graph_id = "BarChart"
          width={"100%"} height={"400px"} />
      </div>
    );
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          {this.props.pokemon.map(this.renderPokemonMoves)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ pokemon }) {
  return { pokemon }
}

export default connect(mapStateToProps)(MovesChart);
