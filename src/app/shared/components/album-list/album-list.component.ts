import { Component, Input, OnInit } from '@angular/core';
import { AlbumModel } from '../../../pages/models/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  @Input() title!: string;
  @Input() albums!: AlbumModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
