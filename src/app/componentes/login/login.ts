import { Component } from '@angular/core';
import {AuthService} from "../../servicios/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent{
  user: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.user, this.password);
  }
}
