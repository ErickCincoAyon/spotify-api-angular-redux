import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MusicState } from '../store/music.state';
import { getNewReleases } from '../store/actions/music.action';
import { selectMusicNewReleases } from '../store/selectors/music.selector';
import { AlbumModel } from '../models/album.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent implements OnInit, OnDestroy{

  public componentDestroyed$ = new Subject();
  public albums!: AlbumModel[];

  constructor(
    private readonly _store: Store<MusicState>
  ) { }

  ngOnInit(): void {

    this._store.dispatch( getNewReleases() );

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicNewReleases )).subscribe(( value ) => {
      this.albums = ( value! ) && value;
    })

  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(1);
  }

}
