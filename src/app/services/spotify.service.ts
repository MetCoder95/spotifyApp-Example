import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class SpotifyService {

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private _http: Http) {

  }

  searchMusic(str: string, type = 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this._http.get(this.searchUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getArtist(id: string){
    this.artistUrl = "https://api.spotify.com/v1/artists/" + id;
    //console.log("Esto se imprime al buscar al artista " + this.artistUrl);
    return this._http.get(this.artistUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getAlbums(artistId: string){
    this.albumsUrl = 'https://api.spotify.com/v1/artists/'+ artistId +'/albums';
    //console.log("Esto se imprime al buscar al artista " + this.artistUrl);
    return this._http.get(this.albumsUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getAlbum(id: string){
    this.albumUrl = 'https://api.spotify.com/v1/albums/'+ id ;
    //console.log("Esto se imprime al buscar al artista " + this.artistUrl);
    return this._http.get(this.albumUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ha ocurrido un error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
