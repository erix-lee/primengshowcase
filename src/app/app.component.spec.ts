/* tslint:disable:no-unused-variable */

import { TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';


import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';

import { APP_BASE_HREF } from '@angular/common';

describe('App: Ng2angle', () => {
    beforeEach(() => {

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
 
                CoreModule,
                LayoutModule,

            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
