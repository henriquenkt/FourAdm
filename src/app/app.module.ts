import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import { AuthGuardService } from './autenticacao/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {SplitterModule} from 'primeng/splitter';
import { EmpresaComponent } from './cadastro/empresa/empresa.component';
import { ParceirosComponent } from './cadastro/parceiros/parceiros.component';
import { RecursosComponent } from './cadastro/recursos/recursos.component';
import { ClientesComponent } from './cadastro/clientes/clientes.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {DividerModule} from 'primeng/divider';
import {ImageModule} from 'primeng/image';
import { CrudComponent } from './crud/crud.component';
import {SidebarModule} from 'primeng/sidebar';
import {PanelModule} from 'primeng/panel';
import { BotoesComponent } from './botoes/botoes.component';
import {ButtonModule} from 'primeng/button';
import { LancarComponent } from './lancamentos/Lancar/lancar.component';
import { CreditosComponent } from './lancamentos/creditos/creditos.component';
import { DespesasComponent } from './lancamentos/despesas/despesas.component';
import {TableModule} from 'primeng/table';
import { RatComponent } from './RAT/rat/rat.component';
import { ConsultaRatComponent } from './RAT/consulta-rat/consulta-rat.component';
import { DemandasComponent } from './demandas/demandas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    LoginComponent,
    EmpresaComponent,
    ParceirosComponent,
    RecursosComponent,
    ClientesComponent,
    CrudComponent,
    BotoesComponent,
    LancarComponent,
    CreditosComponent,
    DespesasComponent,
    RatComponent,
    ConsultaRatComponent,
    DemandasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    MenuModule,
    PanelMenuModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule,
    SplitterModule,
    SlideMenuModule,
    DividerModule,
    ImageModule,
    ReactiveFormsModule,
    SidebarModule,
    PanelModule,
    ButtonModule,
    TableModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
