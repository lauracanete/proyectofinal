import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogosComponent } from './componentes/logos/logos.component';
import { SocialComponent } from './componentes/social/social.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { from } from 'rxjs';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { CirclesComponent } from './componentes/circles/circles.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { PiedepagimaComponent } from './componentes/piedepagima/piedepagima.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    SocialComponent,
    BannerComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    CirclesComponent,
    ProyectoComponent,
    PiedepagimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
