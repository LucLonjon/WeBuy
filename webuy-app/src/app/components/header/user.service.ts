import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from "moment";
import { AuthResponse } from './authResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private user: User;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/users/';
    
  }

  public save(user : User):Observable<any> {
    const headers = { 'content-type': 'application/json'}; 
    const body=JSON.stringify(user);
    console.log(body)
  return this.http.post<User>(this.usersUrl + 'register', user, {'headers': headers});
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/users");
  }

  public logOn(username : String, password : String ):Observable<User> {
    const headers = { 'content-type': 'application/json'};
    const body = {
      "username" : username,
      "password" : password
    }
    return this.http.post<User>(this.usersUrl + 'authenticate',body,{'headers': headers});
  }


  public setSession(authResult : any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');
    
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
} 

logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
}

public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = localStorage.getItem("expires_at");
  const expiresAt = expiration !== null ? JSON.parse(expiration) : "{}";
  return moment(expiresAt);
}   
}
