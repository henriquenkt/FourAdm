import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandasService {

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders().set('Accept', '*/*')
  .set('Accept-Encoding', 'gzip, deflate, br')
  // .set('Accept-Language', 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7')
  .set('Connection', 'keep-alive')
  // .set('Content-Length', '67')
  // .set('Content-Length', '67')
  .set('Access-Control-Allow-Origin', 'origin-list')
  .set('Content-Type', 'multipart/form-data');
  baseUrl = "https://fastproject.senior.com.br/ajax/demanda/select.php";

  parametros = new HttpParams()
  .set('idUsuarioLogado','2897')
  .set('status', '0')
  .set('usuario', '0')
  .set('produto', '99')
  .set('tipo', '1')
  .set('filial', '99')

  getDemandas(): Observable<any> {

    var result = this.http.post(`${this.baseUrl}`, this.parametros.toString(), {
      headers: this.headers,
    });
    return result;
  }

}
