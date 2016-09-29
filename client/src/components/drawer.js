import React, { Component } from 'react';

export default class Drawer extends Component {
  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Pokebase</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="/">Home</a>
          <a className="mdl-navigation__link" href="api">API</a>
          <a className="mdl-navigation__link"
          href="https://github.com/timothycraig/pokebase-react" target="_blank">Github</a>
        </nav>
      </div>
    );
  }
}
