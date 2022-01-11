import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

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

  public logOn(username : String, password : String ):Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body = {
      "username" : username,
      "password" : password
    }
   return this.http.post<User>(this.usersUrl + 'authenticate',body,{'headers': headers})
  }
}
