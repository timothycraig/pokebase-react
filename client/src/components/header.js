import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Pokebase</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a className="mdl-navigation__link" href="/">Home</a>
            <a className="mdl-navigation__link" href="/api">API</a>
            <a className="mdl-navigation__link"
            href="https://github.com/timothycraig/pokebase-react" target="_blank">Github</a>
          </nav>
        </div>
      </header>
    );
  }
}
