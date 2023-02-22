import { Component } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { CrudService } from 'src/app/crud/crud.service';
import { SchemaComponent } from 'src/app/schema/schema.component';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html'
})
export class ParceirosComponent {

  subscription: Subscription = new Subscription();
  filteredPesquisa: any[] = [];
  pesquisaRegistro: any;
  nome: string = '';
  pesquisa: any[] = [];
  tabela: string = 'parceiros';
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

  reactiveForm = SchemaComponent.parceirosForm

  search(event: { query: any }) {
    this.crudService
    .getSelecao('', this.tabela)
    .pipe(map(data => {
      var result = data
           this.pesquisa = result;
          }))
    .subscribe();
    this.subscription.unsubscribe();
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.pesquisa.length; i++) {
      let pesquisas = this.pesquisa[i];
      if (pesquisas.empresa.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(pesquisas);
      }
    }
    this.filteredPesquisa = filtered;
  }

  select() {
    this.reactiveForm.setValue(this.pesquisaRegistro);
    this.pesquisaRegistro = '';
    this.filteredPesquisa = []
  }
}
