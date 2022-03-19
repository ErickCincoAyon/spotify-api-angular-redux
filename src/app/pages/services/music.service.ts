import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AlbumModel } from '../models/album.model';
import { GeneralModel } from '../models/general.model';
import { ArtistModel } from '../models/artist.model';
import { TrackModel } from '../models/track.model';
import { GeneralTrackModel } from '../models/general-track.model';
import { GeneralArtistsModel } from '../models/general-artists.model copy';
import { environment } from '../../../environments/environment';

const { server_url } = environment;

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private readonly _http: HttpClient,
  ) { }

  getNewReleases(): Observable<GeneralModel<AlbumModel[]>> {
    return this._http.get<GeneralModel<AlbumModel[]>>(`${ server_url }/browse/new-releases?limit=12`);
  }

  getArtistsByName( artist: string ): Observable<GeneralModel<ArtistModel[]>> {
    return this._http.get<GeneralModel<ArtistModel[]>>(`${ server_url }/search?q=artist%3A%20${ artist }&type=artist&limit=24`);
  }

  getArtist( id: string ): Observable<ArtistModel> {
    return this._http.get<ArtistModel>(`${ server_url }/artists/${ id }`);
  }

  getRelatedArtists( id: string ): Observable<GeneralArtistsModel<ArtistModel[]>> {
    return this._http.get<GeneralArtistsModel<ArtistModel[]>>(`${ server_url }/artists/${ id }/related-artists?limit=16`);
  }

  getAlbumsByArtist( id: string, page: number = 0 ): Observable<GeneralModel<AlbumModel[]>> {
    return this._http.get<GeneralModel<AlbumModel[]>>(`${ server_url }/artists/${ id }/albums?offset=${ page }&limit=6`);
  }

  getTopTracksByArtist( id: string ): Observable<GeneralTrackModel<TrackModel[]>> {
    return this._http.get<GeneralTrackModel<TrackModel[]>>(`${ server_url }/artists/${ id }/top-tracks?country=mx`);
  }

  getAlbum( id: string ): Observable<AlbumModel> {
    return this._http.get<AlbumModel>(`${ server_url }/albums/${ id }`);
  }

  getTrack( id: string ): Observable<TrackModel> {
    return this._http.get<TrackModel>(`${ server_url }/tracks/${ id }`);
  }
}