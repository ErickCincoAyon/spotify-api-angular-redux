import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MusicState } from '../store/music.state';
import { selectMusicArtists } from '../store/selectors/music.selector';
import { ArtistModel } from '../models/artist.model';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit, OnDestroy {

  public componentDestroyed$ = new Subject();
  public search!: string;
  public artists: ArtistModel[] = [];

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<MusicState>,
  ) { }

  ngOnInit(): void {

    this._route.queryParams.subscribe(({ search }) => {
      this.search = search;
    });

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicArtists )).subscribe(( value ) => {
      let arts: ArtistModel[] = [];
      if ( value ) {
        value.map(( artist: any ) => {
          ( artist.images.length > 0 ) && arts.push( artist );
        })
        this.artists = arts;
      }
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(1);
  }

}
