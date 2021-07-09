import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICountry } from '../country';

@Injectable({
  providedIn: 'root',
})
export class CountriesApiService {
  private baseUrl = 'https://restcountries.eu/rest/v2/';
  private requestFields =
    'fields=name;nativeName;population;region;subregion;capital;flag;topLevelDomain;currencies;languages;borders;alpha3Code';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<ICountry[]> {
    const url = this.baseUrl + 'all?' + this.requestFields;
    return this.http.get<ICountry[]>(url).pipe(catchError(this.handleError));
  }

  getCountryByName(name: string): Observable<ICountry[]> {
    const url = this.baseUrl + 'name/' + name + '?fullText=true';
    return this.http.get<ICountry[]>(url).pipe(catchError(this.handleError));
  }

  getCountryByCode(code: string): Observable<ICountry> {
    const url = this.baseUrl + 'alpha/' + code;
    return this.http.get<ICountry>(url).pipe(catchError(this.handleError));
  }

  getCountriesByCode(codes: string): Observable<ICountry[]> {
    const url = this.baseUrl + 'alpha?codes=' + codes;
    return this.http.get<ICountry[]>(url).pipe(catchError(this.handleError));
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
