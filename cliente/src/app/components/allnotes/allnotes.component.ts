import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Note } from '../../models/note';
import { ExporterService } from '../../servicios/enviarhacia.service';
import { AuthService } from '../../servicios/auth.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css']
})
export class AllnotesComponent implements OnInit {
allnotes=[]
  constructor(private dataService:DataService,
              private router:Router) { }

  ngOnInit() {
    this.allNotas()
  }
  allNotas(){
    this.allnotes=[];
    console.log('ingreso al init de all notes')
    this.dataService.mostrarAllNotes()
      .subscribe(res=>{
        console.log('la respuesta',res)
        for(let i in res['allnotes']){
          this.allnotes.push(res['allnotes'][i]);
        }
        this.allnotes=this.allnotes.sort((prev,next)=>{
          return prev.date-next.date;
          });
        console.log(this.allnotes)
       
    })
    
  }
  editarNota(idx:any){
    console.log(idx)
       this.router.navigate(['/home/editnote',idx])
    //console.log(_id)
    //this.router.navigateByUrl('/home/editnote?_id')
    /*this.dataService.selectedNote=note;
    this.dataService.editFormNote(note)
    .subscribe(res=>{
      console.log(res)
    })*/
  }
  eliminarNota(id:string){
    
    //let idnota= document.getElementById("idnote").innerText
    console.log(id)
    
    this.dataService.deleteFormNote(id)
    .subscribe(res=>{
      console.log(res);
      this.allNotas()
    })
    //this.allNotas()
  }
 



}
