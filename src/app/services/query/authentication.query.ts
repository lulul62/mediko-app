import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
    providedIn: 'root',
})

export default class AuthenticationQuery {
    constructor(private auth: AuthService) { }

    public getUserInformations() {
        this.auth.user$.subscribe(currentUser => {
            return currentUser
        });
    }
}