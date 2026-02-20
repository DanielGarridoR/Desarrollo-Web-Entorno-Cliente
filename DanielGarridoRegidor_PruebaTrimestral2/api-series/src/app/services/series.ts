import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private apiUrl = 'https://peticiones.online/api/series';

  constructor(private http: HttpClient) {}

  getSeries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  create(payload: { title: string; channel: string; rating: number }) {
  return this.http.post<any>(this.apiUrl, payload);
}
  
}
