import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import { MusicService } from '../../services/music.service';
import { MusicActionTypes, successNewReleases, musicError, successArtistsByName, successArtist, successAlbumsByArtist, successTopTracksByArtist, successAlbum, successRelatedArtists, getRelatedArtists, successTrack } from '../actions/music.action';

@Injectable()
export class MusicEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly _musicService: MusicService,
    ) {}

    getNewReleases$ = createEffect(() =>
        this.actions$.pipe(
            ofType( MusicActionTypes.MUSIC_GET_NEW_RELEASES ),
            map(( action: any ) => action ),
            switchMap(() => 
                this._musicService.getNewReleases().pipe(
                    map((value) => {
                        return successNewReleases({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( musicError({ res: error }))
                    })
                )
            )
        )
    );

    getArtistsByName$ = createEffect(() =>
        this.actions$.pipe(
            ofType( MusicActionTypes.MUSIC_GET_ARTISTS_BY_NAME ),
            map(( action: any ) => action.artist ),
            switchMap(( action ) => 
                this._musicService.getArtistsByName( action ).pipe(
                    map((value) => {
                        return successArtistsByName({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( musicError({ res: error }))
                    })
                )
            )
        )
    );

    getArtist$ = createEffect(() =>
        this.actions$.pipe(
            ofType( MusicActionTypes.MUSIC_GET_ARTIST ),
            map(( action: any ) => action.id ),
            switchMap(( action ) => 
                this._musicService.getArtist( action ).pipe(
                    map((value) => {
                        return successArtist({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( musicError({ res: error }))
                    })
                )
            )
        )
    );

    getRelatedArtists$ = createEffect(() =>
        this.actions$.pipe(
            ofType( MusicActionTypes.MUSIC_GET_RELATED_ARTIST ),
            map(( action: any ) => action.id ),
            switchMap(( action ) => 
                this._musicService.getRelatedArtists( action ).pipe(
                    map((value) => {
                        return successRelatedArtists({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( musicError({ res: error }))
                    })
                )
            )
        )
    );

    getAlbumsByArtist$ = createEffect(() =>
        this.actions$.pipe(
            ofType( MusicActionTypes.MUSIC_GET_ARTIST_ALBUMS ),
            map(( action: any ) => action ),
            switchMap(( action ) => 
                this._musicService.getAlbumsByArtist( action.id, action.page ).pipe(
                    map((value) => {
                        return successAlbumsByArtist({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( musicError({ res: error }))
                    })
                )
            )
        )
    );

    getTopTracksByArtist$ = createEffect(() =>
        this.actions$.pipe(
            ofType( MusicActionTypes.MUSIC_GET_TOP_TRACKS_ARTIST ),
            map(( action: any ) => action.id ),
            switchMap(( action ) => 
                this._musicService.getTopTracksByArtist( action ).pipe(
                    map((value) => {
                        return successTopTracksByArtist({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( musicError({ res: error }))
                    })
                )
            )
        )
    );

    
    getAlbum$ = createEffect(() =>
        this.actions$.pipe(
            ofType( MusicActionTypes.MUSIC_GET_ALBUM ),
            map(( action: any ) => action.id ),
            switchMap(( action ) => 
                this._musicService.getAlbum( action ).pipe(
                    map((value) => {
                        return successAlbum({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( musicError({ res: error }))
                    })
                )
            )
        )
    );

    getTrack$ = createEffect(() =>
        this.actions$.pipe(
            ofType( MusicActionTypes.MUSIC_GET_TRACK ),
            map(( action: any ) => action.id ),
            switchMap(( action ) => 
                this._musicService.getTrack( action ).pipe(
                    map((value) => {
                        return successTrack({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( musicError({ res: error }))
                    })
                )
            )
        )
    );

}