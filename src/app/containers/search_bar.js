import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from '../actions/index'

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class SearchBar extends Component {
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
      <form onSubmit={this.onFormSubmit}>
        <TextField
        className="search-bar"
        hintText="Search Pokemon"
        fullWidth={true}
        floatingLabelText="Search Pokemon"
        value={this.state.term}
        onChange={this.onInputChange} />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPokemon }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
