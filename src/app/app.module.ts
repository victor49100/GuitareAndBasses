import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './defaultComponent/app.component';
import { RealisationComponent } from './realisation/realisation.component';
import { ContactComponent } from './contact/contact.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    RealisationComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
