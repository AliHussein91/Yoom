import { Injectable } from '@angular/core';
import { CountryCode } from '../interfaces/country-code';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryCodesService {
  private url = 'http://localhost:3000/country-codes';

  private baseParams = new HttpParams().set('code', 'EG');

  constructor(private http: HttpClient) {}


  getAllCode(): Observable<CountryCode[]> {
    return this.http
      .get<CountryCode[]>(this.url)
      .pipe(
        catchError((error) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }
}

