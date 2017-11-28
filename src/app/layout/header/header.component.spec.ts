/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeaderComponent } from './header.component';


describe('Component: Header', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: []
        }).compileComponents();
    });

    it('should create an instance', async(inject([], () => {
        let component = new HeaderComponent();
        expect(component).toBeTruthy();
    })));
});
