import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TopcustomersDataService {
  private API_URL = 'http://localhost:5004/data';

  constructor(private http: HttpClient) {}

  getComponentData(componentName: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${componentName}`);
  }
}
