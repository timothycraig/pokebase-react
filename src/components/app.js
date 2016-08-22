import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Pokemon from '../containers/pokemon';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Pokebase</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="">API</a>
              <a className="mdl-navigation__link"
              href="https://github.com/timothycraig/PokeBase" target="_blank">Github</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Pokebase</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">API</a>
            <a className="mdl-navigation__link"
            href="https://github.com/timothycraig/PokeBase" target="_blank">Github</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--6-col">
                <SearchBar />
                <Pokemon />
              </div>
              <div className="mdl-cell mdl-cell--6-col">
                <div>Bar graph goes here</div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
