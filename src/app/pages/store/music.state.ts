import { ArtistModel } from '../models/artist.model';
import { AlbumModel } from '../models/album.model';
import { TrackModel } from '../models/track.model';
import { GeneralModel } from '../models/general.model';

export const musicFeatureName = 'MUSIC';

export interface MusicState {
    artist?: ArtistModel;
    artists?: ArtistModel[];
    album?: AlbumModel;
    albums?: GeneralModel<AlbumModel[]>;
    newReleases?: AlbumModel[];
    track?: TrackModel;
    tracks?: TrackModel[];
    error?: any;
}

export const initialMusicState: MusicState = {
    artist: undefined,
    artists: undefined,
    album: undefined,
    albums: undefined,
    newReleases: undefined,
    track: undefined,
    tracks: undefined,
    error: undefined,
}
 