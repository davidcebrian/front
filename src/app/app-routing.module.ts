import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtaquesComponent } from 'src/app/components/ataques/ataques.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { LoginComponent } from 'src/app/components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path:'login', component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ataques', component: AtaquesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
