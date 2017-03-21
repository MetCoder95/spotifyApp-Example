import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRoutes, ROUTER_CONFIGURATION } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { ZeroConfigComponent } from './components/zero-config/zero-config.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'album/:id', component: AlbumComponent},
  {path: 'table', component: ZeroConfigComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule{}
