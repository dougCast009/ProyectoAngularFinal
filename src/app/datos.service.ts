import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  gifs = new BehaviorSubject<any>([]);
  stickers = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  //#region Gifs
  obtenerGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response: any) => {
      this.gifs.next(response.data)
    });
  }
  
  buscarGif(nombreGif: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${nombreGif}api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response: any) => {
      this.gifs.next(response.data)
    });
  }

  obtieneGif(){
    return this.gifs.asObservable();
  }
  //#endregion

  //#region Stickers
  obtenerStickers(){
    return this.http.get(`https://api.giphy.com/v1/stickers/trending?api_key=${environment.giphyApiKey}&limit=50`);
  }

  buscarSticker(nombreSticker : string){
    return this.http.get(`https://api.giphy.com/v1/stickers/search?q=${nombreSticker}api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response: any) => {
      this.stickers.next(response.data)
    });
  }

  obtieneSticker(){
    return this.stickers.asObservable();
  }
  //#endregion
}
