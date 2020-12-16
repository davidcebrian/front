import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private endPoint = 'http://localhost:8080'

  constructor( private http: HttpClient ) { }

  createUser(user: any): Observable<any>{
    let json = JSON.stringify(user);

    return this.http.post(this.endPoint + '/user', user);
  }

  getAllPersonajes(): Observable<any> {
    return this.http.get(this.endPoint + '/personaje'); 
  }

  getAllAttacks(): Observable<any> {
    return this.http.get(this.endPoint + '/ataque'); 
  }


}
