import { Injectable } from '@angular/core';


@Injectable()
export class TranslatorService {

    private defaultLanguage: string = 'en';

    private availablelangs = [
        { code: 'en', text: 'English' },
        { code: 'es_AR', text: 'Spanish' }
    ];

    constructor() {



    }

    getAvailableLanguages() {
        return this.availablelangs;
    }

}
