/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { RouterModule, Router } from '@angular/router';

<<<<<<< HEAD
import { MenuService } from '../../core/menu/menu.service';
=======
>>>>>>> 68df573e70a5b9fc9ee21a12fd8ced8bbb4340bd
import { SettingsService } from '../../core/settings/settings.service';

describe('Component: Sidebar', () => {
    let mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
<<<<<<< HEAD
                MenuService,
=======
               
>>>>>>> 68df573e70a5b9fc9ee21a12fd8ced8bbb4340bd
                SettingsService,
                { provide: Router, useValue: mockRouter }
            ]
        }).compileComponents();
    });

<<<<<<< HEAD
    it('should create an instance', async(inject([MenuService, SettingsService, Router], (menuService, settingsService, router) => {
        let component = new SidebarComponent(menuService, settingsService, router);
=======
    it('should create an instance', async(inject([Router], ( router) => {
        let component = new SidebarComponent(router);
>>>>>>> 68df573e70a5b9fc9ee21a12fd8ced8bbb4340bd
        expect(component).toBeTruthy();
    })));
});
