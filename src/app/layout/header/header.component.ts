import { Component, OnInit, ViewChild } from '@angular/core';

<<<<<<< HEAD
declare var $: any;

import { UserblockService } from '../sidebar/userblock/userblock.service';
import { SettingsService } from '../../core/settings/settings.service';
import { MenuService } from '../../core/menu/menu.service';
=======




>>>>>>> 68df573e70a5b9fc9ee21a12fd8ced8bbb4340bd

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    navCollapsed = true; // for horizontal layout
<<<<<<< HEAD
=======
    
>>>>>>> 68df573e70a5b9fc9ee21a12fd8ced8bbb4340bd
    menuItems = []; // for horizontal layout

    isNavSearchVisible: boolean;
    @ViewChild('fsbutton') fsbutton;  // the fullscreen button

<<<<<<< HEAD
    constructor(public menu: MenuService, public userblockService: UserblockService, public settings: SettingsService) {

        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0,4); // for horizontal layout
=======
    constructor() {

     
>>>>>>> 68df573e70a5b9fc9ee21a12fd8ced8bbb4340bd

    }

    ngOnInit() {
        this.isNavSearchVisible = false;
<<<<<<< HEAD
        if (browser.msie) { // Not supported under IE
            this.fsbutton.nativeElement.style.display = 'none';
        }
    }

    toggleUserBlock(event) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    }

=======

    }

    

>>>>>>> 68df573e70a5b9fc9ee21a12fd8ced8bbb4340bd
    openNavSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    }

    setNavSearchVisible(stat: boolean) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    }

    getNavSearchVisible() {
        return this.isNavSearchVisible;
    }

<<<<<<< HEAD
    toggleOffsidebar() {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    }

    toggleCollapsedSideabar() {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    }

    isCollapsedText() {
        return this.settings.layout.isCollapsedText;
    }

    toggleFullScreen(event) {

        if (screenfull.enabled) {
            screenfull.toggle();
        }
        // Switch icon indicator
        let el = $(this.fsbutton.nativeElement);
        if (screenfull.isFullscreen) {
            el.children('em').removeClass('fa-expand').addClass('fa-compress');
        }
        else {
            el.children('em').removeClass('fa-compress').addClass('fa-expand');
        }
=======
    
    toggleFullScreen(event) {



>>>>>>> 68df573e70a5b9fc9ee21a12fd8ced8bbb4340bd
    }
}
