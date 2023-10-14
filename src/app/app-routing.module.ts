import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './defaultComponent/app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RealisationComponent } from './realisation/realisation.component';
import { DevisComponent } from './devis/devis.component';
import { ContactComponent } from './contact/contact.component';
import { VenirComponent } from './venir/venir.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'presentation',component:PresentationComponent},
  {path:'realisation',component:RealisationComponent},
  {path:'devis',component:DevisComponent},
  {path:'contact',component:ContactComponent},
  {path:'venir',component:VenirComponent},
  {path:'detail',component:DetailsComponent},
  { path: '',   redirectTo: 'accueil', pathMatch: 'full' },
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
