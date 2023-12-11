// guitar.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Guitar } from './guitar.model';

@Injectable({
  providedIn: 'root',
})
export class GuitarService {
  private guitars: Guitar[] = [
    {
      id: '1_1',
      name: 'Guitare 1',
      description: 'Description de la Guitare 1',
      images: ['assets/img/Guitare1/1.webp', 'assets/img/Guitare1/2.webp', 'assets/img/Guitare1/3.webp', 'assets/img/Guitare1/4.webp', 'assets/img/Guitare1/5.webp','assets/img/Guitare1/6.webp', 'assets/img/Guitare1/7.webp', 'assets/img/Guitare1/8.webp', 'assets/img/Guitare1/9.webp', 'assets/img/Guitare1/10.webp'],
      corps: "aulne",
      tables: undefined,
      finition: "vernis nitrocellulosique mat",
      manches: "érable ondé",
      touche: "érable moucheté",
      Leradius: "16“",
      frettes: "Inox Jescar 2.64x1.19",
      diapason: "647,7mm (25“ ½)",
      sillet: "graptech et frette zéro",
      chevalet: "vibrato Gotoh EV510T",
      microManche: "Tornade MS gilmourish",
      microMilieu: "Tornade MS gilmourish",
      microChevalet: "Tornade MS gilmourish",
      potentiometres: "CTS, 1 volume, 2 tonalités",
      selecteur: "Fender 5 positions",
      attacheCourroie: "à blocage Straplocks Ernie Ball",
    },
    {
      id: '1_2',
      name: 'Guitare 2',
      description: 'Description de la Guitare 2',
      images: ['assets/img/Guitare2/1.webp', 'assets/img/Guitare2/2.webp', 'assets/img/Guitare2/3.webp', 'assets/img/Guitare2/4.webp', 'assets/img/Guitare2/5.webp','assets/img/Guitare2/6.webp','assets/img/Guitare2/7.webp','assets/img/Guitare2/8.webp'],
      corps: "frêne",
      tables: "eucalyptus",
      finition: "vernis nitrocellulosique mat",
      manches: "5 plis érable ondé/ovangkol/érable ondé/ovangkol/érable ondé",
      touche: "ébène",
      Leradius: "16“",
      frettes: "Inox Jescar 2.64x1.19",
      diapason: "647,7mm (25“ ½)",
      sillet: "graptech et frette zéro",
      chevalet: "Headless T4M",
      microManche: "Lollar lollartron",
      microMilieu: undefined,
      microChevalet: "Bareknuckle Abraxas",
      potentiometres: "CTS, 2 volumes, 2 tonalités",
      selecteur: "Dimarzio 3 positions",
      attacheCourroie: "à blocage Straplocks Ernie Ball",
    },
    {
      id: '1_3',
      name: 'Guitare 3',
      description: 'Description de la Guitare 3',
      images: ['assets/img/Guitare3/1.webp', 'assets/img/Guitare3/2.webp', 'assets/img/Guitare3/3.webp', 'assets/img/Guitare3/4.webp', 'assets/img/Guitare3/5.webp','assets/img/Guitare3/6.webp','assets/img/Guitare3/7.webp','assets/img/Guitare3/8.webp','assets/img/Guitare3/9.webp','assets/img/Guitare3/10.webp'],
      corps: "aulne",
      tables: "zebrano",
      finition: "vernis nitrocellulosique mat",
      manches: "érable ondé",
      touche: "érable moucheté",
      Leradius: "16“",
      frettes: "Inox Jescar 2.64x1.19",
      diapason: "647,7mm (25“ ½)",
      sillet: "graptech et frette zéro",
      chevalet: "vibrato Headless T4M",
      microManche: "Bareknuckle Slow Hand",
      microMilieu: "Bareknuckle Slow Hand",
      microChevalet: "Bareknuckle Abraxas",
      potentiometres: "CTS, 1 volume, 2 tonalités",
      selecteur: "Schaller 5 positions",
      attacheCourroie: "à blocage Straplocks Ernie Ball",
    },
    {
      id: '2_1',
      name: 'Basse 1',
      description: 'Description de la Basse 1',
      images: ['assets/img/Basse1/1.webp', 'assets/img/Basse1/2.webp', 'assets/img/Basse1/3.webp', 'assets/img/Basse1/4.webp','assets/img/Basse1/5.webp','assets/img/Basse1/6.webp','assets/img/Basse1/7.webp','assets/img/Basse1/8.webp','assets/img/Basse1/9.webp','assets/img/Basse1/10.webp'],
      corps: "acajou",
      tables: "érable",
      finition: "peinture noir et vernis nitrocellulosique brillant sur la table, vernis nitrocellulosique mat sur le dos",
      manches: "ovangkol",
      touche: "palissandre",
      Leradius: "16“",
      frettes: "Inox Jescar 2.64x1.19",
      diapason: undefined,
      sillet: "graptech et frette zéro",
      chevalet: "Gotoh 404 BO",
      mecaniques: "Gotoh 350",
      microManche: "Rickenbacker",
      microMilieu: undefined, // Laisser undefined ou ajouter l'attribut si applicable
      microChevalet: "Rickenbacker",
      potentiometres: "CTS, 2 volumes, 2 tonalités",
      selecteur: "toggle 3 positions",
      attacheCourroie: "à blocage Straplocks Ernie Ball",
    },
    {
      id: '2_2',
      tables: undefined,
      name: 'Basse 2',
      description: 'Description de la Basse 2',
      images: ['assets/img/Basse2/1.webp', 'assets/img/Basse2/2.webp', 'assets/img/Basse2/3.webp', 'assets/img/Basse2/4.webp','assets/img/Basse2/5.webp','assets/img/Basse2/6.webp','assets/img/Basse2/7.webp','assets/img/Basse2/8.webp','assets/img/Basse2/9.webp','assets/img/Basse2/10.webp'],
      corps: "frêne",
      finition: "vernis nitrocellulosique mat",
      manches: "érable ondé",
      touche: "érable moucheté",
      Leradius: "16“",
      frettes: "Inox Jescar 2.64x1.19",
      diapason: undefined,
      sillet: "graptech et frette zéro",
      chevalet: "Hipshot 5A400",
      mecaniques: "Gotoh GBS 510",
      microManche: undefined, // L'information n'a pas été fournie
      microMilieu: "Nordstrand Big J-blade",
      microChevalet: "Nordstrand MM4.2 Dual coil",
      potentiometres: "CTS, 2 volumes, 1 tonalité",
      selecteur: "toggle 3 positions",
      attacheCourroie: "à blocage Straplocks Ernie Ball",
    },


  ];

  getGuitars(): Observable<Guitar[]> {
    return of(this.guitars);
  }

  getGuitarById(id: string): Guitar | undefined {
    return this.guitars.find((guitar) => guitar.id === id);
  }
}
