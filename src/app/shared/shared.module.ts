import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserSessionComponent } from './components/header/user-session/user-session.component';
import { AlbumComponent } from './components/album/album.component';
import { SearchComponent } from './components/header/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { TrackComponent } from './components/track/track.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UserSessionComponent,
    AlbumComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumListComponent,
    ArtistListComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UserSessionComponent,
    AlbumComponent,
    SearchComponent,
    ArtistComponent,
    TrackComponent,
    AlbumListComponent,
    ArtistListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
