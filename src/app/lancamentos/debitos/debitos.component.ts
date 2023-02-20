import { Component } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { CrudService } from 'src/app/crud/crud.service';
import { SchemaComponent } from 'src/app/schema/schema.component';

@Component({
  selector: 'app-despesas',
  templateUrl: './debitos.component.html'
})
export class DebitosComponent {
  subscription: Subscription = new Subscription();
  filteredPesquisa: any[] = [];
  pesquisaRegistro: any;
  pesquisa: any[] = [];
  tabela: string = 'debitos';

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.reactiveForm.controls;
  }

  reactiveForm = SchemaComponent.debitosForm

  search(event: { query: any }) {
    this.crudService
    .getSelecao('', this.tabela)
    .pipe(map(data => {
           this.pesquisa = data;
          }))
    .subscribe();
    this.subscription.unsubscribe();
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
    this.filteredPesquisa = [];
    this.pesquisaRegistro = '';
  }
}

