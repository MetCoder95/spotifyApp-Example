import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'
import { Album } from '../../../Album';
import { Artist } from '../../../Artist';
import { ActivatedRoute, Params }  from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  providers: [SpotifyService],
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {


  }

  ngOnInit() {
    // this._route.params
    // .switchMap((params: Params) => this._spotifyService.getArtist(params['id']))
    // .subscribe(artist => this.artist = artist);

    this._route.params
    .map(params => params['id'])
    .subscribe((id) => {
      this._spotifyService.getArtist(id)
      .subscribe( artist => {
        this.artist = artist;
      })

      this._spotifyService.getAlbums(id)
      .subscribe( albums => {
        this.albums = albums.items;
      })
    })
  }
}
