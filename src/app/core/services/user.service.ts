import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends MasterService<User> {

  constructor(public override http: HttpClient) {
    super(http, 'user');
  }
  public authentication(email: string, password: string): Observable<any> {
    return this.http.post(this.url()+"/login", {
      email: email,
      password: password
    });
  }
  public search(text: string):Observable<any>{
    return this.http.post(this.url() + '/search' , {search: text});
 }
}
