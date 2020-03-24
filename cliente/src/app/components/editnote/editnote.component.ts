import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import {DataService} from '../../servicios/data.service';
@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent implements OnInit {
  note:any = {}
  constructor(private activateRoute:ActivatedRoute,
              private dataService:DataService,
              private router:Router) { 
    this.activateRoute.params.subscribe(params =>{
      console.log(params['id']);
      let id = params['id']
      this.dataService.mostrarFormNote()
       .subscribe(resnote=>{
         console.log('respuesta',resnote['allnotes'][id])
         this.note = resnote['allnotes'][id]
         console.log(this.note._id)
       })
      
    })
  }

  ngOnInit() {
  }
  noteEdit(formanote:NgForm){
    console.log('notedit', formanote.value)
    const{title,descriptionnote} = formanote.value
    console.log(title)
    console.log(descriptionnote)
    let noteId =document.getElementById("idnote").innerText
    let notetitle = title
    let notedescription = descriptionnote

    console.log('de noteEdit',noteId)
    this.note=({
      _id:noteId,
      title:notetitle,
      description:notedescription
    })
    console.log(this.note)
    this.dataService.editFormNote(this.note)
    //this.router.navigate(['/home/allnotes'])
  }

}
