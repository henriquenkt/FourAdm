import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
})
export class MenuPrincipalComponent {
  items!: MenuItem[];

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
          { label: 'Despesas', icon: 'pi pi-minus-circle' ,
          routerLink: ['/debitos'] },
          { label: 'Creditos', icon: 'pi pi-plus-circle' ,
          routerLink: ['/creditos'] },
          { label: 'Caixa', icon: 'pi pi-money-bill',
          routerLink: ['/caixa']  },
        ],
      },
    ];
  }
}
