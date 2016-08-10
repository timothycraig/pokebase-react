import injectTapEventPlugin from 'react-tap-event-plugin';
// // needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import React, { Component } from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePickerExampleSimple from './DatePickerExampleSimple';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Clicker from './clicker'

const styles = {
  appBar: {
    display: 'flex'
  }
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="Pokebase" style={styles.appBar} />
          <DatePickerExampleSimple />

          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />
          <Clicker />
        </div>
      </MuiThemeProvider>
    );
  }
}
