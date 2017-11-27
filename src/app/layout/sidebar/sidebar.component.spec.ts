/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { RouterModule, Router } from '@angular/router';

import { SettingsService } from '../../core/settings/settings.service';

describe('Component: Sidebar', () => {
    let mockRouter = {
        navigate: jasmine.createSpy('navigate')
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
               
                SettingsService,
                { provide: Router, useValue: mockRouter }
            ]
        }).compileComponents();
    });

    it('should create an instance', async(inject([Router], ( router) => {
        let component = new SidebarComponent(router);
        expect(component).toBeTruthy();
    })));
});
