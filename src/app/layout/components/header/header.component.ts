import { Component, OnInit, Input, Output, EventEmitter,Host,Inject,forwardRef  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() menuActive: boolean;
    @Output() change : EventEmitter<boolean> = new EventEmitter<boolean>();

    themes: any;
    constructor(private router: Router) {
        this.themes = ['omega', 'cupertino', 'cruze', 'darkness', 'flick', 'home', 'kasper', 'lightness', 'ludvig', 'pepper-Grinder'
            , 'redmond', 'rocket', 'south-Street', 'start', 'trontastic', 'voclain']
    }
    changeTheme(event: Event, theme: string) {
        let themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        themeLink.href = 'assets/css/themes/' + theme + '/theme.css';
        event.preventDefault();
    }

    onMenuButtonClick(event: Event) {
      
        this.menuActive = !this.menuActive;
        this.change.emit(this.menuActive);
        console.info("!!")
        event.preventDefault();
    }
    ngOnInit() {

    }
}
