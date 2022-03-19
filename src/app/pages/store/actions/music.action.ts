import { createAction, props } from '@ngrx/store';
import { AlbumModel } from '../../models/album.model';
import { GeneralModel } from '../../models/general.model';
import { ArtistModel } from '../../models/artist.model';
import { TrackModel } from '../../models/track.model';
import { GeneralTrackModel } from '../../models/general-track.model';
import { GeneralArtistsModel } from '../../models/general-artists.model copy';

export enum MusicActionTypes {
    MUSIC_GET_NEW_RELEASES = '[Music] Get new releases',
    MUSIC_GET_NEW_RELEASES_SUCCESS = '[Music] Success new releases',

    MUSIC_GET_ARTISTS_BY_NAME = '[Music] Get artists by name',
    MUSIC_GET_ARTISTS_BY_NAME_SUCCESS = '[Music] Success artists by name',

    MUSIC_GET_ARTIST = '[Music] Get artist',
    MUSIC_GET_ARTIST_SUCCESS = '[Music] Success artist',
    MUSIC_RESET_ARTIST = '[Music] Reset artist',

    MUSIC_GET_ARTIST_ALBUMS = '[Music] Get artist albums',
    MUSIC_GET_ARTIST_ALBUMS_SUCCESS = '[Music] Success artist albums',
    MUSIC_RESET_ARTIST_ALBUMS = '[Music] Reset artist albums',

    MUSIC_GET_TOP_TRACKS_ARTIST = '[Music] Get top tracks artist',
    MUSIC_GET_TOP_TRACKS_ARTIST_SUCCESS = '[Music] Success top tracks artist',
    MUSIC_RESET_TOP_TRACKS_ARTIST = '[Music] Reset top tracks artist',

    MUSIC_GET_ALBUM = '[Music] Get album',
    MUSIC_GET_ALBUM_SUCCESS = '[Music] Success album',
    MUSIC_RESET_ALBUM = '[Music] Reset album',

    MUSIC_GET_RELATED_ARTIST = '[Music] Get related artist',
    MUSIC_GET_RELATED_ARTIST_SUCCESS = '[Music] Success related artist',
    MUSIC_RESET_RELATED_ARTIST = '[Music] Reset related artist',

    MUSIC_GET_TRACK = '[Music] Get track',
    MUSIC_GET_TRACK_SUCCESS = '[Music] Success track',
    MUSIC_RESET_TRACK = '[Music] Reset track',

    MUSIC_ERROR = '[Music] Error',
    MUSIC_RESET_ERROR = '[Music] Reset error',
} 
// export const resetMessage = createAction( AuthActionTypes.AUTH_RESET_MESSA
// -- //
export const getNewReleases = createAction(
    MusicActionTypes.MUSIC_GET_NEW_RELEASES,
);
export const successNewReleases = createAction(
    MusicActionTypes.MUSIC_GET_NEW_RELEASES_SUCCESS,
    props<{ res: GeneralModel<AlbumModel[]> }>()
);
// -- //
export const getArtistsByName = createAction(
    MusicActionTypes.MUSIC_GET_ARTISTS_BY_NAME,
    props<{ artist: string }>()
);
export const successArtistsByName = createAction(
    MusicActionTypes.MUSIC_GET_ARTISTS_BY_NAME_SUCCESS,
    props<{ res: GeneralModel<ArtistModel[]> }>()
);
// -- //
export const getArtist = createAction(
    MusicActionTypes.MUSIC_GET_ARTIST,
    props<{ id: string }>()
);
export const successArtist = createAction(
    MusicActionTypes.MUSIC_GET_ARTIST_SUCCESS,
    props<{ res: ArtistModel }>()
);
export const resetArtist = createAction(
    MusicActionTypes.MUSIC_RESET_ARTIST
);
// -- //
export const getAlbumsByArtist = createAction(
    MusicActionTypes.MUSIC_GET_ARTIST_ALBUMS,
    props<{ id: string, page: number }>()
);
export const successAlbumsByArtist = createAction(
    MusicActionTypes.MUSIC_GET_ARTIST_ALBUMS_SUCCESS,
    props<{ res: GeneralModel<AlbumModel[]> }>()
);
export const resetAlbumsByArtist = createAction(
    MusicActionTypes.MUSIC_RESET_ARTIST_ALBUMS
);
// -- //
export const getTopTracksByArtist = createAction(
    MusicActionTypes.MUSIC_GET_TOP_TRACKS_ARTIST,
    props<{ id: string }>()
);
export const successTopTracksByArtist = createAction(
    MusicActionTypes.MUSIC_GET_TOP_TRACKS_ARTIST_SUCCESS,
    props<{ res:  GeneralTrackModel<TrackModel[]> }>()
);
export const resetTopTracksByArtist = createAction(
    MusicActionTypes.MUSIC_RESET_TOP_TRACKS_ARTIST
);
// -- //
export const getAlbum = createAction(
    MusicActionTypes.MUSIC_GET_ALBUM,
    props<{ id: string }>()
);
export const successAlbum = createAction(
    MusicActionTypes.MUSIC_GET_ALBUM_SUCCESS,
    props<{ res:  AlbumModel }>()
);
export const resetAlbum = createAction(
    MusicActionTypes.MUSIC_RESET_ALBUM
);
// -- //
export const getRelatedArtists = createAction(
    MusicActionTypes.MUSIC_GET_RELATED_ARTIST,
    props<{ id: string }>()
);
export const successRelatedArtists = createAction(
    MusicActionTypes.MUSIC_GET_RELATED_ARTIST_SUCCESS,
    props<{ res: GeneralArtistsModel<ArtistModel[]> }>()
);
export const resetArtists = createAction(
    MusicActionTypes.MUSIC_RESET_RELATED_ARTIST
);
// -- //
export const getTrack = createAction(
    MusicActionTypes.MUSIC_GET_TRACK,
    props<{ id: string }>()
);
export const successTrack = createAction(
    MusicActionTypes.MUSIC_GET_TRACK_SUCCESS,
    props<{ res: TrackModel }>()
);
export const resetTrack = createAction(
    MusicActionTypes.MUSIC_RESET_TRACK
);
// -- //
export const musicError = createAction(
    MusicActionTypes.MUSIC_ERROR,
    props<{ res: any }>()
)
export const resetMusicError = createAction( MusicActionTypes.MUSIC_RESET_ERROR );