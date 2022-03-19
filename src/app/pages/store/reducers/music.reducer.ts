import { Action, createReducer, on } from '@ngrx/store';
import { initialMusicState, MusicState } from '../music.state';
import * as actions from '../actions/music.action';

const _musicReducer = createReducer(
    initialMusicState,
    on( actions.getNewReleases, state => ({ ...state })),
    on( actions.successNewReleases, ( state, { res }) => ({ ...state, newReleases: res.albums!.items })),

    on( actions.getArtistsByName, state => ({ ...state })),
    on( actions.successArtistsByName, ( state, { res }) => ({ ...state, artists: res.artists!.items })),

    on( actions.getArtist, state => ({ ...state })),
    on( actions.successArtist, ( state, { res }) => ({ ...state, artist: res })),
    on( actions.resetArtist, ( state) => ({ ...state, artist: undefined })),

    on( actions.getAlbumsByArtist, state => ({ ...state })),
    on( actions.successAlbumsByArtist, ( state, { res }) => ({ ...state, albums: res })),
    on( actions.resetAlbumsByArtist, ( state) => ({ ...state, albums: undefined })),

    on( actions.getTopTracksByArtist, state => ({ ...state })),
    on( actions.successTopTracksByArtist, ( state, { res }) => ({ ...state, tracks: res.tracks })),
    on( actions.resetTopTracksByArtist, ( state) => ({ ...state, tracks: undefined })),

    on( actions.getAlbum, state => ({ ...state })),
    on( actions.successAlbum, ( state, { res }) => ({ ...state, album: res, tracks: res.tracks.items })),
    on( actions.resetAlbum, ( state) => ({ ...state, album: undefined })),

    on( actions.getRelatedArtists, state => ({ ...state })),
    on( actions.successRelatedArtists, ( state, { res }) => ({ ...state, artists: res.artists })),
    on( actions.resetArtists, ( state) => ({ ...state, artists: undefined })),

    on( actions.getTrack, state => ({ ...state })),
    on( actions.successTrack, ( state, { res }) => ({ ...state, track: res })),
    on( actions.resetTrack, ( state) => ({ ...state, track: undefined })),

    on( actions.musicError, ( state, { res }) => ({ ...state, error: res.error })),
    on( actions.resetMusicError, ( state ) => ({ ...state, error: undefined })),
);

export function musicReducer( state: MusicState | undefined, action: Action ) {
    return _musicReducer(state, action);
}