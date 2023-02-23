import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
})
export class CrudComponent {
  pesquisa: any;

  constructor(private serviceCrud : CrudService) {}
}
