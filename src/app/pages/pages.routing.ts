import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { TrackPageComponent } from './track-page/track-page.component';

const routes: Routes = [
  { 
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: NewReleasesComponent },
      { path: 'artistas', component: ArtistsComponent },
      { path: 'artista/:id', component: ArtistPageComponent },
      { path: 'album/:id', component: AlbumPageComponent },
      { path: 'track/:id', component: TrackPageComponent },
      { path: '**', redirectTo: '' },
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
