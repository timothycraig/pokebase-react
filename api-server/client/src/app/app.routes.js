"use strict";
var router_1 = require('@angular/router');
var matchup_page_component_1 = require('./matchup-page/matchup-page.component');
var api_page_component_1 = require('./api-page/api-page.component');
var routes = [
    { path: 'matchup', component: matchup_page_component_1.MatchupPageComponent },
    { path: 'api', component: api_page_component_1.ApiPageComponent },
    { path: '', redirectTo: '/matchup', pathMatch: 'full' },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map