import { Component, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/crud/crud.service';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css'],
  providers: [CrudService],
})
export class BotoesComponent {

  constructor(private crudService: CrudService) {}

  subscription: Subscription = new Subscription();
  @Input() json: any;
  @Input() tabela : string = "";
  @Output() reactiveForm: any;

  ngOnInit(){
  }

  salvar() {
    if(this.json._id == undefined || this.json._id == ''){
      this.crudService
      .getInsert(this.json, this.tabela)
      .subscribe();
    }else{
      this.crudService
      .getUpdate(this.json, this.tabela)
      .subscribe();
    }
    this.subscription.unsubscribe();
  }

  excluir(): void {
    this.crudService
      .getDelete(this.json, this.tabela)
      .subscribe();
    this.subscription.unsubscribe();
  }
}
