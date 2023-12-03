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
      id: '1',
      name: 'Guitar 1',
      description: 'Description of Guitar 1',
      images: ['assets/img/Guitare1/1.webp', 'assets/img/Guitare1/2.jpg', 'assets/img/Guitare1/3.jpg', 'assets/img/Guitare1/4.jpg', 'assets/img/Guitare1/5.jpg'],
    },
    {
      id: '2',
      name: 'Guitar 2',
      description: 'Description of Guitar 2',
      images: ['url4', 'url5', 'url6'],
    },
  ];

  getGuitars(): Observable<Guitar[]> {
    return of(this.guitars);
  }

  getGuitarById(id: string): Guitar | undefined {
    return this.guitars.find((guitar) => guitar.id === id);
  }
}
