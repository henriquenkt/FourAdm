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
export class CrudService {
  constructor(private http: HttpClient) {}


  headers = new HttpHeaders().set('Content-Type', 'application/json');

  // Pesquisar
  getSelecao(nome: string, tabela: string): Observable<any> {
    const json = `{"nome" :  {
    "$regex": "${nome}",
    "$options": "i"
  }}`;
    var result = this.http.post(`${baseUrl}/pesquisar${tabela}`, json, {
      headers: this.headers,
    });
    return result;
  }

  // Inserir
  getInsert(json: any, tabela: string): Observable<any> {
    var result = this.http.post(`${baseUrl}/${tabela}`, json, {
      headers: this.headers,
    });
    return result;
  }

  // Atualizar
  getUpdate(json: any, tabela: string): Observable<any> {
    var result = this.http.put(`${baseUrl}/${tabela}`, json, {
      headers: this.headers,
    });
    return result;
  }

  // Excluir
  getDelete(json: any, tabela: string): Observable<any> {
    var result = this.http.delete(`${baseUrl}/${tabela}`, {
      headers: this.headers,
    });
    return result;
  }

  // Tratar errors
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
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
