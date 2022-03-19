import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../shared/shared.module';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { StoreModule } from '@ngrx/store';
import { musicFeatureName } from './store/music.state';
import { musicReducer } from './store/reducers/music.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MusicEffects } from './store/effects/music.effect';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { TrackPageComponent } from './track-page/track-page.component';

@NgModule({
  declarations: [
    PagesComponent,
    NewReleasesComponent,
    ArtistsComponent,
    ArtistPageComponent,
    AlbumPageComponent,
    TrackPageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    StoreModule.forFeature( musicFeatureName, musicReducer ),
    EffectsModule.forFeature([ MusicEffects ]),
  ],
})
export class PagesModule { }
