import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.services'
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthenticationService, private router: Router) { }


    canActivate() {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
