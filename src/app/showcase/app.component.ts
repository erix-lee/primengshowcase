import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('overlayState', [
            state('hidden', style({
                opacity: 0
            })),
            state('visible', style({
                opacity: 1
            })),
            transition('visible => hidden', animate('400ms ease-in')),
            transition('hidden => visible', animate('400ms ease-out'))
        ])
    ],
})
export class AppComponent implements OnInit {

    menuActive: boolean;

    activeMenuId: string;
    constructor(

        private router: Router,
    ) {
    }
    changeTheme(event: Event, theme: string) {
        let themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        themeLink.href = 'assets/css/themes/' + theme + '/theme.css';
        event.preventDefault();
    }

    onMenuButtonClick(event: Event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }
    ngOnInit() {
        this.router.events
            .subscribe((event) => {
                console.log( event);
                if (event instanceof NavigationEnd) { // 当导航成功结束时执行
                    window.scrollTo(0, 0);
                   
                }
            });
    }
}
