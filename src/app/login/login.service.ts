import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

const baseUrl = 'https://fourbackend.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json');
  $login(data: any): Observable<any> {
    var result = this.http.post(`${baseUrl}/authenticate`, data, {
      headers: this.headers,
    });
    return result;
   }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
  }
}
