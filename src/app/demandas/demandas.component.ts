import { Component } from '@angular/core';
import { map } from 'rxjs';
import { DemandasService } from './demandas.service';

@Component({
  selector: 'app-demandas',
  templateUrl: './demandas.component.html',
  styleUrls: ['./demandas.component.css']
})
export class DemandasComponent {

  constructor(private demandasService : DemandasService) { }

  demandas: [] = [];

  ngOnInit() {

    this.demandasService
  .getDemandas()
  .pipe(map(result => {
         this.demandas = result;
        }))
  .subscribe()
      }
}
