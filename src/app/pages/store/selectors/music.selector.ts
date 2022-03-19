import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MusicState, musicFeatureName } from '../music.state';

export const getMusicFeatureState = createFeatureSelector<MusicState>( musicFeatureName );

export const selectMusicNewReleases = createSelector(
    getMusicFeatureState,
    (state: MusicState) => state.newReleases
);

export const selectMusicArtists = createSelector(
    getMusicFeatureState,
    (state: MusicState) => state.artists
);

export const selectMusicArtist = createSelector(
    getMusicFeatureState,
    (state: MusicState) => state.artist
);

export const selectMusicAlbums = createSelector(
    getMusicFeatureState,
    (state: MusicState) => state.albums
);

export const selectMusicTracks = createSelector(
    getMusicFeatureState,
    (state: MusicState) => state.tracks
);

export const selectMusicAlbum = createSelector(
    getMusicFeatureState,
    (state: MusicState) => state.album
);

export const selectMusicTrack = createSelector(
    getMusicFeatureState,
    (state: MusicState) => state.track
);

export const selectMusicError = createSelector(
    getMusicFeatureState,
    (state: MusicState) => state.error
);