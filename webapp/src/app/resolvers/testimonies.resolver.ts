import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataService } from '../services/data.service';

@Injectable({
    providedIn: 'root'
})
export class TestimoniesResolver implements Resolve<any> {

    constructor(private dataService: DataService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
        try {
            return this.dataService.getTestimoniesList();
        } catch (error) {
            console.error(error); // deal with API error (eg not found)
            this.router.navigate(['/']); // could redirect to error page
            return EMPTY;
        }
    }
}
