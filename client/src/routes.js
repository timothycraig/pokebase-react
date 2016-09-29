import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Pokemon from './containers/pokemon';
import SearchBar from './containers/search_bar';
import MovesChart from './containers/chart';
import ApiDocs from './components/api_doc';
import RailsRedirect from './components/rails_redirect';

export default (
  <Route path="/" component={App}>
    <IndexRoute components={{search: SearchBar, pokemon: Pokemon, chart: MovesChart}} />
    <Route path="fuckyoureact" component={RailsRedirect} />
    <Route path="api" component={ApiDocs} />
  </Route>
);
