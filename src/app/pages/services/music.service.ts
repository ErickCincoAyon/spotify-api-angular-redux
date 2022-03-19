import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AlbumModel } from '../models/album.model';
import { GeneralModel } from '../models/general.model';
import { ArtistModel } from '../models/artist.model';
import { TrackModel } from '../models/track.model';
import { GeneralTrackModel } from '../models/general-track.model';
import { GeneralArtistsModel } from '../models/general-artists.model copy';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private readonly _http: HttpClient,
  ) { }

  getNewReleases(): Observable<GeneralModel<AlbumModel[]>> {
    return this._http.get<GeneralModel<AlbumModel[]>>('https://api.spotify.com/v1/browse/new-releases?limit=12', {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('access_token' )}`
      }
    })
  }

  getArtistsByName( artist: string ): Observable<GeneralModel<ArtistModel[]>> {
    return this._http.get<GeneralModel<ArtistModel[]>>(`https://api.spotify.com/v1/search?q=artist%3A%20${ artist }&type=artist&limit=24`, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('access_token' )}`
      }
    })
  }

  getArtist( id: string ): Observable<ArtistModel> {
    return this._http.get<ArtistModel>(`https://api.spotify.com/v1/artists/${ id }`, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('access_token' )}`
      }
    })
  }

  getRelatedArtists( id: string ): Observable<GeneralArtistsModel<ArtistModel[]>> {
    return this._http.get<GeneralArtistsModel<ArtistModel[]>>(`https://api.spotify.com/v1/artists/${ id }/related-artists?limit=16`, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('access_token' )}`
      }
    })
  }

  getAlbumsByArtist( id: string, page: number = 0 ): Observable<GeneralModel<AlbumModel[]>> {
    return this._http.get<GeneralModel<AlbumModel[]>>(`https://api.spotify.com/v1/artists/${ id }/albums?offset=${ page }&limit=6`, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('access_token' )}`
      }
    })
  }

  getTopTracksByArtist( id: string ): Observable<GeneralTrackModel<TrackModel[]>> {
    return this._http.get<GeneralTrackModel<TrackModel[]>>(`https://api.spotify.com/v1/artists/${ id }/top-tracks?country=mx`, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('access_token' )}`
      }
    })
  }

  getAlbum( id: string ): Observable<AlbumModel> {
    return this._http.get<AlbumModel>(`https://api.spotify.com/v1/albums/${ id }`, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('access_token' )}`
      }
    })
  }

  getTrack( id: string ): Observable<TrackModel> {
    return this._http.get<TrackModel>(`https://api.spotify.com/v1/tracks/${ id }`, {
      headers: {
        'Authorization': `Bearer ${ localStorage.getItem('access_token' )}`
      }
    })
  }
}