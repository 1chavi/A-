import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Project } from './person/person.model';
// eslint-disable-next-line sort-imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ApiService {

  constructor(private http: HttpClient) {
  }
  }


