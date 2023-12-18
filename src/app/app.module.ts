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
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {VenirComponent} from "./venir/venir.component";
import {FormsModule} from "@angular/forms";
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    AppComponent,
    RealisationComponent,
    ContactComponent,
    PageNotFoundComponent,
    DetailsBassesComponent,
    DetailsGuitaresComponent,
    VenirComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LeafletModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
