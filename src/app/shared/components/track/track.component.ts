import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '../../../pages/models/track.model';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input() index!: number;
  @Input() track!: TrackModel;

  constructor() { }

  ngOnInit(): void { }

  msToMinutes( ms: number ): string {
    let minutes: number = Math.floor(ms / 60000);
    let seconds: any = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + ( seconds < 10 ? '0' : '' ) + seconds;
  }

}
