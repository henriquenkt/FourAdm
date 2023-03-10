import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CrudService } from 'src/app/crud/crud.service';
import { SchemaComponent } from 'src/app/schema/schema.component';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html'
})
export class CreditosComponent {

  filteredPesquisa: any[] = [];
  pesquisaRegistro: any;
  pesquisa: any[] = [];
  tabela: string = 'creditos';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  onSubmit() {
    this.reactiveForm.controls;
  }

  reactiveForm = SchemaComponent.creditosForm

  search(event: { query: any }) {
    this.crudService
    .getSelecao('', this.tabela)
    .pipe(map(data => {
           this.pesquisa = data;
          }))
    .subscribe();
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.pesquisa.length; i++) {
      let pesquisas = this.pesquisa[i];
      if (pesquisas.descricao.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(pesquisas);
      }
    }
    this.filteredPesquisa = filtered;
    this.pesquisaRegistro = '';
  }

  select() {
    this.reactiveForm.setValue(this.pesquisaRegistro);
    this.pesquisaRegistro = '';
    this.pesquisa = [];
  }
}

