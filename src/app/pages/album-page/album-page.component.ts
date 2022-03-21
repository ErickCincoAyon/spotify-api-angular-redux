import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlbumModel } from '../models/album.model';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MusicState } from '../store/music.state';
import { getAlbum, resetAlbum, resetTopTracksByArtist, getRelatedArtists, resetArtists } from '../store/actions/music.action';
import { selectMusicAlbum, selectMusicTracks, selectMusicArtists } from '../store/selectors/music.selector';
import { TrackModel } from '../models/track.model';
import { Subject, takeUntil } from 'rxjs';
import { ArtistModel } from '../models/artist.model';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit, OnDestroy {
  
  public componentDestroyed$ = new Subject();
  public album!: AlbumModel;
  public tracks!: TrackModel[];
  public artistId!: string;
  public artists!: ArtistModel[];

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<MusicState>,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(({ id }) => {
      ( id ) && this._store.dispatch( getAlbum({ id }));
    });

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicAlbum )).subscribe(( value ) => {
      if ( value ) {
        this.album = value;
        this.artistId = this.album.artists[0].id;
        this._store.dispatch( getRelatedArtists({ id: this.artistId }));
      }
    });

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicTracks )).subscribe(( value ) => {
      this.tracks = ( value! ) && value;
    });

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicArtists )).subscribe(( value ) => {
      this.artists = ( value! ) && value;
    });
  }

  ngOnDestroy(): void {
    this._store.dispatch( resetAlbum() );
    this._store.dispatch( resetTopTracksByArtist() );
    this._store.dispatch( resetArtists() );
    this.componentDestroyed$.next(1);
  }

}
