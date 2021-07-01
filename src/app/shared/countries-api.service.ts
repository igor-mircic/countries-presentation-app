// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICountry } from '../country';

@Injectable({
  providedIn: 'root',
})
export class CountriesApiService {
  private url = 'https://restcountries.eu/rest/v2/all';
  constructor(private http: HttpClient) {}
  getAllCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.url).pipe(
      // tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
