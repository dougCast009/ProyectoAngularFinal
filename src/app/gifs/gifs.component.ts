import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription = new Subscription;

  constructor(private dataService: DatosService) { }

  ngOnInit(): void {
    this.dataService.obtenerGifs();
    this.subscription = this.dataService.obtieneGif()
    .subscribe((response: any) =>{
      this.gifs = response;
    });
  }

  buscarGif(searchTerm: string){
    if(searchTerm !== ''){
      this.dataService.buscarGif(searchTerm);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
