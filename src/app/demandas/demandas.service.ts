import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandasService {

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  baseUrl = "https://fastproject.senior.com.br/ajax/demanda/select.php?idUsuarioLogado=2897&status=0&usuario=0&produto=99&tipo=1&filial=99";

  getDemandas(): Observable<any> {

    var result = this.http.post(`${this.baseUrl}`, {}, {
      headers: this.headers,
    });
    return result;
  }

}
