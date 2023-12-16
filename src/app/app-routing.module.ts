import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { CatalogoAdmComponent } from './componentes/dashboard-adm/catalogo-adm/catalogo-adm.component';
import { DashboardAdmComponent } from './componentes/dashboard-adm/a-home-adm/dashboard-adm.component';
import { ComprasAdmComponent } from './componentes/dashboard-adm/compras-adm/compras-home/compras-adm.component';
import { FacturaCompraComponent } from './componentes/dashboard-adm/compras-adm/factura-compra/factura-compra.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: DashboardAdmComponent},
  {path: 'catalogo-adm', component: CatalogoAdmComponent},
  {path: 'compras-adm', component: ComprasAdmComponent},
  {path: 'facturas-compras', component: FacturaCompraComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
