import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    menuItems: Array<any>;
    router: Router;

    constructor( public injector: Injector) {

      

    }

    ngOnInit() {

     

    }

    

    
}
