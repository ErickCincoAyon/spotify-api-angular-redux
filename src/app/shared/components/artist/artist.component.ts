import { Component, Input, OnInit } from '@angular/core';
import { ArtistModel } from '../../../pages/models/artist.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input() artist!: ArtistModel;

  constructor() { }

  ngOnInit(): void { }

  
  formattedNumber( num: number ): string { 
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
