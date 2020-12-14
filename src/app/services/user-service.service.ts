import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { createSecureServer } from 'http2';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private endPoint = 'http://localhost:8080/user'

  constructor( private http: HttpClient ) { }

  createUser(user: any): Observable<any>{
    let json = JSON.stringify(user);

    return this.http.post(this.endPoint, user);
  }


}
