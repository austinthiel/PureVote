import { Component, OnInit} from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationCancel, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/app.component.html'
})
export class AppComponent  implements OnInit{
	loading: boolean = true;

	constructor( private  router: Router){}
	ngOnInit() {


	}
}