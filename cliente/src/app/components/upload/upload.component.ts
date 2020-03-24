import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { FileItem } from "../../models/file-item";
import { CargaimagenService } from '../../servicios/carga-imagenes.service';
import { AngularFireModule } from '@angular/fire';
//import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  estaSobreElemento:boolean=false;
  archivos: FileItem[] = [];
  constructor( public _cargaImagenes: CargaimagenService) { }

  ngOnInit() {
  }
  cargarImagenes(){
    this._cargaImagenes.cargarImagenesFirebase( this.archivos)
  }
  limpiarArchivos(){
    this.archivos=[];
  }

}
