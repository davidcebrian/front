import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { LoginComponent } from 'src/app/components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NavvarComponent } from 'src/app/components/navvar/navvar.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { CardsComponent } from 'src/app/components/cards/cards.component';
import { AtaquesComponent } from 'src/app/components/ataques/ataques.component';
import { TablaAtaquesComponent } from 'src/app/components/tabla-ataques/tabla-ataques.component';
import { DataTablesModule } from 'angular-datatables';
import { FormularioComponent } from 'src/app/components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    HomeComponent,
    NavvarComponent,
    SliderComponent,
    CardsComponent,
    AtaquesComponent,
    TablaAtaquesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
