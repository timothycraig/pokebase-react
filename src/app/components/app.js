import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Pokemon from '../containers/pokemon';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {yellow400} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const muiTheme = getMuiTheme({
  palette: {},
  appBar: {
    height: 100,
    display: 'flex',
    color: yellow400
  },
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="Pokebase" />
          <SearchBar />
          <Pokemon />
        </div>
      </MuiThemeProvider>
    );
  }
}
