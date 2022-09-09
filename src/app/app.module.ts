import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogosComponent } from './componentes/logos/logos.component';
import { SocialComponent } from './componentes/social/social.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    SocialComponent,
    BannerComponent,
    AcercademiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
