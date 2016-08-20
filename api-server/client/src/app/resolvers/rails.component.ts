import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ActivatedRouteSnapshot,Router,RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'rails-redirect',
  template: `
    Redirect from rails router...
  `
})
export class Rails {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      if(data['data'].goto == undefined){
        this.router.navigate(['/matchup'])
      }else{
        var path = data['data'].goto;
        this.router.navigate([path]);
      }
    });
  }
}
