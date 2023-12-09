import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { GuitarService } from 'src/app/guitar.service';

@Component({
  selector: 'app-details',
  templateUrl: './details-guitares.component.html',
  styleUrls: ['./details-guitares.component.scss']
})
export class DetailsGuitaresComponent implements OnInit{
  guitar: any;

  constructor(
    private route: ActivatedRoute,
    private guitarService:  GuitarService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const guitarId: string  = <string>params.get('id');
      this.guitar = this.guitarService.getGuitarById(guitarId);
    });
  }

  protected readonly GuitarService = GuitarService;
}
