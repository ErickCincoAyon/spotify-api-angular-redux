import { Component, Input, OnInit } from '@angular/core';
import { ArtistModel } from '../../../pages/models/artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  @Input() title!: string;
  @Input() artists!: ArtistModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
