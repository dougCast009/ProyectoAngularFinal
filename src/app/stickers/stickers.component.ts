import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {
  stickers: any[] = [];
  constructor(private dataService: DatosService) { }

  ngOnInit(): void {
    this.dataService.obtenerStickers().subscribe((response: any)=>{
      console.log(response);
      this.stickers = response.data;
    });
  }

}
