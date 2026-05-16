import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  isLogin: boolean = true;
  islogin: boolean = true;

  loginData = {
    username: '',
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


    constructor(private auth: Auth) {}

  onLogin() {
    this.auth.login(this.loginData).subscribe({
      next: (res) => {
        console.log('Login success', res);
      },
      error: (err) => {
        console.error('Login error', err);
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
