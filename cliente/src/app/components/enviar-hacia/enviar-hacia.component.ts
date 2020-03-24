import { Component, OnInit } from '@angular/core';
import { ExporterService } from '../../servicios/enviarhacia.service';
@Component({
  selector: 'app-enviar-hacia',
  templateUrl: './enviar-hacia.component.html',
  styleUrls: ['./enviar-hacia.component.css']
})
export class EnviarHaciaComponent implements OnInit {
  //aExcel: any;
  constructor( private aExcel: ExporterService) { }
  public clientes = [];
  ngOnInit() {
  }
  enviarPrinter(){
    console.log("window.print");
    window.print()
  }
  crearExcel():void{
    console.log("a excel")
   this.aExcel.exportarExcel(this.clientes,'descarga excel')
  }

}
