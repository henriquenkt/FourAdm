import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CrudService } from 'src/app/crud/crud.service';
import { SchemaComponent } from 'src/app/schema/schema.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {
  filteredPesquisa: any[] = [];
  pesquisaRegistro: any;
  pesquisa: any[] = [];
  tabela: string = 'clientes';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  onSubmit() {
    this.reactiveForm.controls;
  }

  reactiveForm = SchemaComponent.clientesForm

  search(event: { query: any }) {
    this.crudService
      .getSelecao('', this.tabela)
      .pipe(map(data => {
        var result = data
             this.pesquisa = result;
            }))
      .subscribe();
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.pesquisa.length; i++) {
      let pesquisas = this.pesquisa[i];
      if (pesquisas.nome.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(pesquisas);
      }
    }
    this.filteredPesquisa = filtered;
  }

  select() {
    this.reactiveForm.setValue(this.pesquisaRegistro);
    this.pesquisaRegistro = '';
    this.pesquisa = [];
  }
}
