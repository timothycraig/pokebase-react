import { provideRouter, RouterConfig } from '@angular/router';
import { MatchupPageComponent } from './components/matchup-page/matchup-page.component';
import { ApiPageComponent } from './components/api-page/api-page.component'
import { RailsResolver, RailsResolveFunction } from './resolvers/rails.resolver';
import { Rails } from './resolvers/rails.component';
import { PageNotFoundComponent } from './components/404page/404.component'
// import {CanDeactivateGuard} from './resolvers/candeactivate';

const routes: RouterConfig = [
  { path: 'matchup', component: MatchupPageComponent },
  { path: 'api', component: ApiPageComponent },
  {
    path: '',
    component: Rails,
    pathMatch: 'full',
    resolve: { data: 'RailsResolveFunction' }
  },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes, { enableTracing: false }),
  RailsResolver,
  { provide: 'RailsResolveFunction', useValue: RailsResolveFunction }
];
