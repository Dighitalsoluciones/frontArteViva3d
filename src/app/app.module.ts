import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { Logo3dComponent } from './componentes/logo3d/logo3d.component';
import { CondicionAdmDirective } from './directivas/condicion-adm.directive';
import { CatalogoAdmComponent } from './componentes/dashboard-adm/catalogo-adm/catalogo-adm.component';
import { ComprasAdmComponent } from './componentes/dashboard-adm/compras-adm/compras-home/compras-adm.component';
import { VentasAdmComponent } from './componentes/dashboard-adm/ventas-adm/ventas-adm.component';
import { SecDestacadosComponent } from './componentes/catalogo/sec-destacados/sec-destacados.component';
import { DashboardAdmComponent } from './componentes/dashboard-adm/a-home-adm/dashboard-adm.component';
import { CatalogoComponent } from './componentes/catalogo/sec-a-main/catalogo.component';
import { FacturaCompraComponent } from './componentes/dashboard-adm/compras-adm/factura-compra/factura-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    DashboardAdmComponent,
    CatalogoComponent,
    Logo3dComponent,
    CondicionAdmDirective,
    CatalogoAdmComponent,
    ComprasAdmComponent,
    VentasAdmComponent,
    SecDestacadosComponent,
    FacturaCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
