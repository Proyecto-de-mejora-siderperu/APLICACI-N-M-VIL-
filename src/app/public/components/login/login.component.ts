import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private userService: UserService,private router:Router) { }
  ngOnInit() { }
  initSesion() {
    console.log(this.user);
    if (this.user.password && this.user.email) {
      this.userService.authentication(this.user.email, this.user.password).subscribe(user => {
        if(user.success){
          this.router.navigate(["/admin"]);
        }
      });
    }
  }
}
