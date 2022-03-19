import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MusicState } from '../store/music.state';
import { TrackModel } from '../models/track.model';
import { getTrack, resetTrack } from '../store/actions/music.action';
import { selectMusicTrack } from '../store/selectors/music.selector';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  public componentDestroyed$ = new Subject();
  public track!: TrackModel;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<MusicState>,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(({ id }) => {
      ( id ) && this._store.dispatch( getTrack({ id }));
    });

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicTrack )).subscribe(( value ) => {
      this.track = ( value! ) && value;
    });
  }

  ngOnDestroy(): void {
    this._store.dispatch( resetTrack() );
    this.componentDestroyed$.next(1);
  }


}
