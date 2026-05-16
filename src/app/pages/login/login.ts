import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  isLogin: boolean = true;

  loginData = {
    login: '',
    password: '',
  };

  registerData = {
    email: '',
    fname: '',
    lname: '',
    username: '',
    password: ''
  };

  toggleMode() {
  this.isLogin = !this.isLogin;
  
  }


    constructor(private auth: Auth , private router: Router) {}

onLogin() {
  this.auth.login(this.loginData).subscribe({
    next: (res: any) => {
      localStorage.setItem('token', res.token); // ✅ เก็บ token
      localStorage.setItem('user', JSON.stringify(res.user)); // ✅ เก็บ user

      this.router.navigate(['/admin']);
    },
    error: () => {
      alert('Login failed');
    } 
  });
}

  onRegister() {
    this.auth.register(this.registerData).subscribe({
      next: (res) => {
        console.log('Register success', res);
      },
      error: (err) => {
        console.error('Register error', err);
      }
    });
  }

}

