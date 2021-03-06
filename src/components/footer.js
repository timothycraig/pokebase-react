import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <div className="mdl-logo">Pokebase</div>
            <ul className="mdl-mini-footer__link-list">
              <li><a href="/">Home</a></li>
              <li><a href="api">API</a></li>
              <li><a href="https://github.com/timothycraig/pokebase-react">Github</a></li>
            </ul>
          </div>
          <div className="mdl-mini-footer__right-section">
            Pokémon images & names © 1995-2016 Nintendo/Game Freak.
          </div>
      </footer>
    );
  }
}
