import { AuthService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService) { }
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  jwtHelper = new JwtHelperService();

   
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
