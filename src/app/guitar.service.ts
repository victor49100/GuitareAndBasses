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
    },
    {
      id: '1_2',
      name: 'Guitare 2',
      description: 'Description de la Guitare 2',
      images: ['assets/img/Guitare2/1.webp', 'assets/img/Guitare2/2.webp', 'assets/img/Guitare2/3.webp', 'assets/img/Guitare2/4.webp', 'assets/img/Guitare2/5.webp','assets/img/Guitare2/6.webp','assets/img/Guitare2/7.webp','assets/img/Guitare2/8.webp'],
    },
    {
      id: '2_1',
      name: 'Basse 1',
      description: 'Description de la Basse 1',
      images: ['assets/img/Basse1/1.webp', 'assets/img/Basse1/2.webp', 'assets/img/Basse1/3.webp', 'assets/img/Basse1/4.webp','assets/img/Basse1/5.webp','assets/img/Basse1/6.webp','assets/img/Basse1/7.webp','assets/img/Basse1/8.webp','assets/img/Basse1/9.webp','assets/img/Basse1/10.webp'],
    },
    {
      id: '2_2',
      name: 'Basse 2',
      description: 'Description de la Basse 2',
      images: ['assets/img/Basse2/1.webp', 'assets/img/Basse2/2.webp', 'assets/img/Basse2/3.webp', 'assets/img/Basse2/4.webp','assets/img/Basse2/5.webp','assets/img/Basse2/6.webp','assets/img/Basse2/7.webp','assets/img/Basse2/8.webp','assets/img/Basse2/9.webp','assets/img/Basse2/10.webp'],
    },


  ];

  getGuitars(): Observable<Guitar[]> {
    return of(this.guitars);
  }

  getGuitarById(id: string): Guitar | undefined {
    return this.guitars.find((guitar) => guitar.id === id);
  }
}
