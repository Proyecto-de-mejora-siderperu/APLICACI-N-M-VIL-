import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user:User=new User();
  constructor() { }
  ngOnInit() {}
  initSesion(){
    console.log(this.user);
    if(this.user.password && this.user.email){

    }
  }
}
