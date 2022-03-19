import { Component, OnInit, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { MusicState } from '../store/music.state';
import { getArtist, resetArtist, getAlbumsByArtist, resetAlbumsByArtist, getTopTracksByArtist, resetTopTracksByArtist } from '../store/actions/music.action';
import { selectMusicArtist, selectMusicAlbums, selectMusicTracks } from '../store/selectors/music.selector';
import { ArtistModel } from '../models/artist.model';
import { AlbumModel } from '../models/album.model';
import { TrackModel } from '../models/track.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent implements OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('albumList', {static: false}) public albumList: any;
  public albumScroll: boolean = false;
  public componentDestroyed$ = new Subject();

  public id!: string;
  public artist!: ArtistModel;
  public tracks!: TrackModel[];
  public albums: AlbumModel[] = [];
  public page: number = 0;
  public nextPage: boolean = false;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<MusicState>,
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe(({ id }) => {
      if ( id ) {
        this.id = id;
        this._store.dispatch( getArtist({ id: this.id }) );
        this._store.dispatch( getAlbumsByArtist({ id: this.id, page: this.page }) );
        this._store.dispatch( getTopTracksByArtist({ id: this.id }));
      } 
    });

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicArtist )).subscribe(( value ) => {
      this.artist = ( value! ) && value;
    });

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicTracks )).subscribe(( value ) => {
      this.tracks = ( value! ) && value;
    });

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectMusicAlbums )).subscribe(( value ) => {
      if ( value ) {
        value.items!.map(( album: AlbumModel ) => {
          this.albums.push( album );
        });
        this.nextPage = ( value.next ) ? true : false;
        this.albumScroll = true;
      }
    });

  }

  loadMore( page: number ): void {
    this.page = page;
    this._store.dispatch( getAlbumsByArtist({ id: this.id, page: this.page }) );
  }

  ngAfterViewChecked(): void {
    if( this.albumScroll && this.page > 0 ) {
      this.scrollToBottom( this.albumList.nativeElement );  
    }
  } 

  scrollToBottom( element: HTMLElement ): void {
    try {
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
      setTimeout(() => { this.albumScroll = false }, 800);
    } catch (error) { }
  }

  ngOnDestroy(): void {
    this._store.dispatch( resetArtist() );
    this._store.dispatch( resetAlbumsByArtist() );
    this._store.dispatch( resetTopTracksByArtist() );
    this.componentDestroyed$.next(1);
  }

}
