import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { GroupByOptionsWithElement, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');
        var isAuthenticated: boolean = false;

        for (let userDetail in user) {
            isAuthenticated = true;
            break;
        }

        if (!isAuthenticated) {
            this.router.navigate(['/login']);
        }
        return isAuthenticated;
    }
}
