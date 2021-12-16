import { Injectable } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

@Injectable({
    providedIn: 'root',
})

export default class LoginGuard {

    constructor(private auth: AuthService) { }

    public redirectToLogin() {
        return this.auth.loginWithRedirect();
    }

    public isUserConnected() {
        return this.auth.isAuthenticated$;
    }
}