import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon, fetchInitial } from '../actions/index'

export default class SearchBar extends Component {
  componentWillMount() {
    this.props.fetchInitial();
  }

  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchPokemon(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <form action="submit" onSubmit={this.onFormSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                pattern="[A-Z,a-z, ]*"
                type="text"
                id="pokesearch"
                value={this.state.term}
                onChange={this.onInputChange} />
              <label className="mdl-textfield__label" htmlFor="pokesearch">Search Pokemon...</label>
              <span className="mdl-textfield__error">Letters and spaces only</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPokemon, fetchInitial }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
