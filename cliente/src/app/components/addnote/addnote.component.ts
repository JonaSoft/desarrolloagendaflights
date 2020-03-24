import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Note } from '../../models/note';
import { ExporterService } from '../../servicios/enviarhacia.service';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';



@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {
  formaNote:FormGroup;
  public _titlenote:string;
  public _descriptionnote: string;
  _date:Date;
  _user:string;
  DataService: any;
  adicionado:boolean=false;
  constructor( private dataService:DataService) {
    this.formaNote = new FormGroup({
      'titlenote':new FormControl(''),
      'descriptionnote':new FormControl(''),
    })
   }

  ngOnInit() {
  }
  enviarFormNote(forma:any){
    console.log(forma.value);
    console.log('enviando nota',this.formaNote.value);
    this._titlenote = this.formaNote.value.titlenote.toUpperCase();
    this._descriptionnote = this.formaNote.value.descriptionnote;
    this._date = new Date();
    //console.log(this._date);
    if(this._titlenote!=""){
      this.dataService.saveFormNote( forma.value)
      .subscribe(res=>{
       console.log('grabado',res);
       this.adicionado=true;
       this.formaNote.reset({
         'titlenote':" ",
         'descriptionnote':" "
       });
 
       setTimeout(() => {
         this.adicionado=false;
       }, 2500);
     })
    }
    
    
    
   
  }
} 