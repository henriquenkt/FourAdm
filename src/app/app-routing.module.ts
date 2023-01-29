import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardService } from './autenticacao/auth-guard.service';
import { ClientesComponent } from './cadastro/clientes/clientes.component';
import { EmpresaComponent } from './cadastro/empresa/empresa.component';
import { ParceirosComponent } from './cadastro/parceiros/parceiros.component';
import { RecursosComponent } from './cadastro/recursos/recursos.component';
import { CreditosComponent } from './lancamentos/creditos/creditos.component';
import { DebitosComponent } from './lancamentos/debitos/debitos.component';
import { LoginComponent } from './login/login.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'home',
    component: MenuPrincipalComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: '',
    component: MenuPrincipalComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'empresa',
    component: EmpresaComponent,
    canActivate:[AuthGuardService]
  }
  ,
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate:[AuthGuardService]
  }
  ,
  {
    path: 'parceiros',
    component: ParceirosComponent,
    canActivate:[AuthGuardService]
  }
  ,
  {
    path: 'recursos',
    component: RecursosComponent,
    canActivate:[AuthGuardService]
  }
  ,
  {
    path: 'despesas',
    component: MenuPrincipalComponent,
    canActivate:[AuthGuardService]
  }
  ,
  {
    path: 'creditos',
    component: CreditosComponent,
    canActivate:[AuthGuardService]
  }
  ,
  {
    path: 'debitos',
    component: DebitosComponent,
    canActivate:[AuthGuardService]
  }
  ,
  {
    path: 'caixa',
    component: MenuPrincipalComponent,
    canActivate:[AuthGuardService]
  }
  ,
  {
    path: 'authenticate',
    component: AppComponent,
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
