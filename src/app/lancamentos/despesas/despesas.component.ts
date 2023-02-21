import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
})
export class DespesasComponent implements OnInit {

  lancamentos: [] = []
  tabela = 'lancamentos'

  constructor(private crudService : CrudService) { }

  ngOnInit() {

      this.crudService
    .getSelecao('', this.tabela)
    .pipe(map(data => {
           this.lancamentos = data;
          }))
    .subscribe()
    //.unsubscribe();
  }
}
