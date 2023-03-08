import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    private isLoggedIn!: boolean;

    setAuthStatus(isLoggedIn: boolean) {
        this.isLoggedIn = isLoggedIn;
    }

    getAuthStatus(): boolean {
        return this.isLoggedIn;
    }
}
