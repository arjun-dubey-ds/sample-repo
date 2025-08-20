import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _url = environment.apiUrl;

  constructor(private _http: HttpClient) {
  }

  private setOptions(options?: any) {
    if(!options) {
      options = {};
    }

    if(!options.headers) {
      options.headers = new HttpHeaders();
    }

    options.headers = options.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('access_token'));

    return options;
  }

  public get<T>(endpoint: string, options?: any): Observable<T> {
      return this._http.get<T>(`${endpoint}`, this.setOptions(options)) as Observable<T>;
  }

  public post<T>(endpoint: string, body: unknown, options?: any): Observable<T> {
    return this._http.post<T>(`${endpoint}`, body, this.setOptions(options)) as Observable<T>;
  }

  public put<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this._http.put<T>(`${endpoint}`, body, this.setOptions(options)) as Observable<T>;
  }

  public delete<T>(endpoint: string, options?: any): Observable<T> {
    return this._http.delete<T>(`${endpoint}`, this.setOptions(options)) as Observable<T>;
  }

  public patch<T>(endpoint: string, body: any, options?: any): Observable<T> {
    return this._http.patch<T>(`${endpoint}`, body, this.setOptions(options)) as Observable<T>;
  }

  public handleError<T>(_operation = 'operation', result?: T) {
    return (): Observable<T> => {
      return of(result as T);
    };
  }
}
