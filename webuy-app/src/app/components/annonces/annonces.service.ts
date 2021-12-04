import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Annonce } from './annonce';

@Injectable()
export class AnnoncesService {

  private annoncesUrl: string;

  constructor(private http: HttpClient) { 
    this.annoncesUrl = 'http://localhost:8080/annonces';
  }

  public findAll(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.annoncesUrl);
  }

  public save(annonce: Annonce) {
    return this.http.post<Annonce>(this.annoncesUrl, annonce);
  }
}
