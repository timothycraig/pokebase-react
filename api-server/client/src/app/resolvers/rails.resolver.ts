import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {RouterStateSnapshot} from '@angular/router';

@Injectable()
export class RailsResolver {
  constructor() {}
}

export function RailsResolveFunction(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return state.queryParams;
}
