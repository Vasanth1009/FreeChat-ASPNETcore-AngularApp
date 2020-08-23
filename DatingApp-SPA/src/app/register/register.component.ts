import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  // tslint:disable-next-line: typedef
  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
