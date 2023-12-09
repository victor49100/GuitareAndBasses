import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './defaultComponent/app.component';
import { RealisationComponent } from './realisation/realisation.component';
import { ContactComponent } from './contact/contact.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {CommonModule} from "@angular/common";
import {DetailsBassesComponent} from "./details/details-basses/details-basses.component";
import { DetailsGuitaresComponent } from './details/details-guitares/details-guitares.component';


@NgModule({
  declarations: [
    AppComponent,
    RealisationComponent,
    ContactComponent,
    PageNotFoundComponent,
    DetailsBassesComponent,
    DetailsGuitaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
