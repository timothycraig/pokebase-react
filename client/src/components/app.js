import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Drawer from './drawer';

export default class App extends Component {
  render() {
    const { search, pokemon, chart } = this.props
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header />
        <Drawer />
        <main className="mdl-layout__content">
          <div className="page-content">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--12-col">
                <div>{search}</div>
              </div>
              <div className="mdl-cell mdl-cell--6-col">
                <div>{pokemon}</div>
              </div>
              <div className="mdl-cell mdl-cell--6-col">
                <div>{chart}</div>
              </div>
              <div className="mdl-cell mdl-cell--12-col">
                {this.props.children}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
