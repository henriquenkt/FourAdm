import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
})
export class MenuPrincipalComponent {
  items!: MenuItem[];
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  logoff(){
    sessionStorage.clear();
     this.router.navigate(['/login']);
  }

  ngOnInit() {

    this.items = [
      {
        label: 'Cadastros',
        icon: "pi pi-user",
        items: [
          { label: 'Empresa',
          routerLink: ['/empresa']},
          { label: 'Clientes',
          routerLink: ['/clientes']},
          { label: 'Parceiros',
          routerLink: ['/parceiros'] },
          { label: 'Recursos',
          routerLink: ['/recursos'] }
        ],
      },
      {
        label: 'Lancamentos',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Lancar', icon: 'pi pi-minus-circle' ,
          routerLink: ['/lancar'] },
          { label: 'Caixa', icon: 'pi pi-money-bill',
          routerLink: ['/caixa']  },
        ],
      },
      {
        label: 'RAT',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Lancar RATs', icon: 'pi pi-money-bill' ,
          routerLink: ['/rat'] },
          { label: 'Consultar', icon: 'pi pi-money-bill',
          routerLink: ['/consultaRat']  },
        ],
      },
      {
        label: 'Demandas',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Consultar Demandas', icon: 'pi pi-money-bill' ,
          routerLink: ['/demandas'] }
        ],
      },
    ];
  }
}
