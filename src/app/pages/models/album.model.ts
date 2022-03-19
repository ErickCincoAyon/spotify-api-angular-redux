import { ArtistModel } from "./artist.model";
import { TrackModel } from './track.model';

export interface AlbumModel {
    album_type: string;
    artists: ArtistModel[];
    available_markets: string[];
    copyrights: ICopyright[];
    external_ids: {
        upc: string;
    };
    external_urls: {
        spotify: string;
    };
    genres: string[];
    href: string;
    id: string;
    images: IImage[];
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    tracks: ITrack;
    type: string;
    uri: string;
}

interface ICopyright {
    text: string;
    type: string;
}

interface IImage {
    url: string;
    height: number;
    width: number;
}

interface ITrack {
    href: string;
    items: TrackModel[];
}