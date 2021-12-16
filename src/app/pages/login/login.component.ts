import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import LoginGuard from 'src/app/guard/login.guard';

@Component({
  selector: 'app-welcome',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public auth: AuthService, public guard: LoginGuard, public router: Router) { }


  ngOnInit(): void {
    this.guard.isUserConnected().subscribe((isConnected: Boolean) => {
      !isConnected ? this.guard.redirectToLogin() : this.router.navigate(['/meeting'])
    })
  }

}
