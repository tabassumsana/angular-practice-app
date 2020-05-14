import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  registerUser(user:any){
  	console.log("in authservice");
  	console.log(user);
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register', user,{headers: headers}).pipe(
      map(res => res)
    );
  }
   authenticateUser(user:any){
   console.log("in authservice authenticateUser");
    console.log(user);
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
    .pipe(
      map(res => res)
    );
  }
  editDoB(user:any){
    console.log("in authservice editDoB");
    console.log(user);
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/editDoB', user,{headers: headers})
    .pipe(
      map(res => res)
    );

  }

}
 	