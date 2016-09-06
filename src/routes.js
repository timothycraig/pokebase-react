import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Pokemon from './containers/pokemon';
import SearchBar from './containers/search_bar';
import ApiDocs from './components/api_doc';

export default (
  <Route path="/" component={App}>
    <IndexRoute components={{search: SearchBar, main: Pokemon}} />
    <Route path="api" component={ApiDocs} />
  </Route>
);
