import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    emailId!: string;
    password!: string;

    constructor(
        private authService: AuthService,
        private router: Router,
        private title: Title,
        private route: ActivatedRoute
    ) {
        this.title.setTitle(route.snapshot.data['title']);
    }

    login() {
        if (this.emailId === 'user' && this.password === 'pass') {
            let user = {
                emailId: this.emailId,
                password: this.password,
            };
            sessionStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/todo']);
        }
    }
}
