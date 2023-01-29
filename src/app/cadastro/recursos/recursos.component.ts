import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/crud/crud.service';
import { SchemaComponent } from 'src/app/schema/schema.component';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  providers: [CrudService],
})
export class RecursosComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  filteredPesquisa: any[] = [];
  pesquisaRegistro: any;
  nome: string = '';
  pesquisa: any[] = [];
  tabela: string = 'recursos';
  registros: any[] = [];
  result: any[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.reactiveForm.controls;
  }

  inserir() {
    this.crudService
      .getInsert(this.reactiveForm.value, this.tabela)
      .subscribe();
    this.subscription.unsubscribe();
  }

  alterar(): void {
    this.crudService
      .getUpdate(this.reactiveForm.value, this.tabela)
      .subscribe();
    this.subscription.unsubscribe();
  }

  excluir(): void {
    this.crudService
      .getDelete(this.reactiveForm.value, this.tabela)
      .subscribe();
    this.subscription.unsubscribe();
  }

  reactiveForm = SchemaComponent.recursosForm;

  search(event: { query: any }) {
    this.crudService
      .getSelecao('', this.tabela)
      .subscribe((subscription) => (this.pesquisa = subscription));
    this.subscription.unsubscribe();
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
  }
}
