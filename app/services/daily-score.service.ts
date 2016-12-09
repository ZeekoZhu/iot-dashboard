import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NumberService {
    private numberUrl: 'http://123.206.102.69:8080/test/number';

    constructor(private http: Http) { }

    getNumber(): Promise<number> {
        return this.http.get(this.numberUrl)
            .toPromise()
            .then(response => +response.text())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}