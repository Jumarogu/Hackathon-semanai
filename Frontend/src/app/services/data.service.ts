import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createPlaylist(access_token: string): Observable<any>{
    const body = {
      access_token: access_token,
    };
    return this.http.post( this.apiUrl + '/create', body);
  }

}