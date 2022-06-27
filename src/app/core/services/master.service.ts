import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MasterService <T>{
  constructor(public http:HttpClient, @Inject("tag") public tag:string) {  
  }
  public url():string { 
    return environment.apiUrl+'/'+ this.tag
  }
  public getAll():Observable<any> {
    return this.http.get<any>(this.url());
  }
  public get(id:number):Observable<any> {
    return this.http.get<any>(this.url()+'/'+id);
  }
  public create(data:T):Observable<any> {
    return this.http.post<any>(this.url(),data);
  }
  public update(id:number,data:T):Observable<any> {
    return this.http.put<any>(this.url()+'/'+id,data);
  }
  public delete(id:number):Observable<any> {
    return this.http.delete<any>(this.url()+'/'+id);
  }
}
