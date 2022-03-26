import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MusicState } from '../store/music.state';
import { TrackModel } from '../models/track.model';
import { getTrack, resetTrack } from '../store/actions/music.action';
import { selectMusicTrack } from '../store/selectors/music.selector';
import { Subject, takeUntil } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.scss']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  public componentDestroyed$ = new Subject();
  public track!: TrackModel;
  public embedTrackUrl!: any;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<MusicState>,
    private readonly _sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(({ id }) => {
      ( id ) && this._store.dispatch( getTrack({ id }));
    });

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicTrack )).subscribe(( value ) => {
      this.track = ( value! ) && value;
      this.embedTrackUrl = ( value! ) && this.transform( `https://open.spotify.com/embed/track/${ value.id }` );
      console.log( this.embedTrackUrl );
    });
  }

  transform( url: string ) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(): void {
    this._store.dispatch( resetTrack() );
    this.componentDestroyed$.next(1);
  }


}
