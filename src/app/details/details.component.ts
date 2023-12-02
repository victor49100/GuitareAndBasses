import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GuitarService} from "../guitar.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  guitar: any; // Remplacez par le type réel de votre objet Guitar

  constructor(
    private route: ActivatedRoute,
    private guitarService:  GuitarService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const guitarId: string  = <string>params.get('id');
      this.guitar = this.guitarService.getGuitarById(guitarId);
      console.log('Guitar Details:', this.guitar);
    });
  }

  protected readonly GuitarService = GuitarService;
}
