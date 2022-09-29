import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from '../models/form';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root'
})
export class FormService extends MasterService<Form>{
  constructor(public override http: HttpClient) {
    super(http, "form");
  }
  public create(data: Form): Observable<any> {
    return this.http.post(this.url(), data);
  }
  public getFormsActive(): Observable<any> {
    return this.http.get(this.url() );
  }

}
