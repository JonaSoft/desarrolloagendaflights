import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Flights } from '../models/flights';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  selectedFlight:Flights;
  selectedNote:Note;
  note:Note[];
  flights:Flights[];
  market:any;
  flightini:any;
  codope:any;
  flightope:any;
  origen:any;
  destino:any;
  fechainit:any;
  cliente:any;
  peticion:any;
  title:string;
  description:string;


  URL_API = 'http://localhost:3000/flights';
  URL_API2 = 'http://localhost:3000/notes';
 
  constructor(private http:HttpClient) {
    this.selectedFlight = new Flights()
    //this.selectedNote = new Note()
   
   }
   //solicita todas las notas
  mostrarAllNotes(){
    return this.http.get(this.URL_API2+ `/allnotes`)
  };
   //guardar nota nueva
   saveFormNote(nota:Note){
     const{titlenote,descriptionnote} = nota;
     console.log('desde data service recibimos de addcomponent',nota)
     
     return this.http.post(this.URL_API2 +`/addnote`+`?title=${titlenote}?description=${descriptionnote}`,nota)
   }
   //eliminar nota
   deleteFormNote(_id:string){
     console.log('desde dataService borrar',_id)
     return this.http.delete(this.URL_API2 + `/${_id}`)

   }
   //editar nota
   editFormNote(nota:Note){
     console.log(nota._id)
     console.log(nota)
     var _id = nota._id;
     console.log(_id)
     console.log(this.URL_API2 +`/edit/${_id}`)
     return this.http.put(this.URL_API2+`/edit/5e77d23b74caf323fc50be16`,nota)
    //return this.http.put(this.URL_API2 +`/${_id}`,nota)
    
   }
   mostrarFormNote(){
    return this.http.get(this.URL_API2 + `/allnotes`)
    /*.subscribe(res=>{
      console.log(res)
      return 
    })*/
    

   }


  getFlights(flightini:any){
    return this.http.get(this.URL_API +`?${flightini}`)    
  }
  
  postFlight(flight:Flights){
    return this.http.post(this.URL_API,flight)
  }
  
  putFlight(flight:Flights){
    //return this.http.put(this.URL_API + `/${flight._id}`,flight);
  }

  deleteFlight(_id:String){
    return this.http.delete(this.URL_API + `/${_id}`)
  }
  

  //solicita data desde el formulario
  mostrarDataForm(market:any,flightini:any,codope:any,flightope:any,origen:any,destino:any,fechainit:any){
    // PETICION POR FECHA DE REGISTRO
    if(market == "" && flightini=="" && codope=="" && flightope=="" && origen=="" && destino=="" ){
      return this.http.get(this.URL_API +`?fechareg=${fechainit}`) 
    }
    //PETICION POR SOLO MARKET
    if(flightini=="" && codope=="" && flightope=="" && origen=="" && destino=="" && fechainit==""){
      return this.http.get(this.URL_API +`?market=${market}`) 
    }
     //PETICION POR OPERADOR
     if( market=="" && flightini=="" && flightope=="" && origen=="" && destino=="" && fechainit==""){
      return this.http.get(this.URL_API +`?codope=${codope}`)  
    }
    //SOLO FLIGHTINI
    if( market=="" && codope=="" && flightope=="" && origen=="" && destino=="" && fechainit==""){
      return this.http.get(this.URL_API +`?flightini=${flightini}`)  
    }
    //NONE
    if(market=="" && flightini=="" && codope=="" && flightope=="" && origen=="" && destino=="" && fechainit==""){
      return this.http.get(this.URL_API +`?none`) 
    }
    //PETICION POR MARKETERO Y FLIGHTINI
    if(codope=="" && flightope=="" && origen=="" && destino=="" && fechainit==""){
      return this.http.get(this.URL_API +`?market=${market}&flightini=${flightini}`)  
    }
    //PETICION POR CODOPERATOR FLIGHTOPERATOR
    if(market=="" && flightini=="" && origen=="" && destino=="" && fechainit==""){
      return this.http.get(this.URL_API +`?codope=${codope}&flightope=${flightope}`)  
    }
    //PETICION POR ORIGEN Y DESTINO
    if(market=="" && flightini=="" && codope=="" && flightope=="" && fechainit==""){
      return this.http.get(this.URL_API +`?origin=${origen}&destinat=${destino}`)  
    }
    //PETICION POR MARKETERO Y OPERADOR
    if( flightini=="" && flightope=="" && origen=="" && destino=="" && fechainit==""){
      return this.http.get(this.URL_API +`?market=${market}&codope=${codope}`)  
    }
   
  }
  mostrarFlight(cliente:any){
      console.log(cliente);

      let res =this.http.get(`https://firebasestorage.googleapis.com/v0/b/app-chat-2da1c.appspot.com/o/img%2F${cliente}?alt=media&token=546df765-a7ab-436b-80a9-0d289b3bc68b`)
      //https://firebasestorage.googleapis.com/v0/b/app-chat-2da1c.appspot.com/o/img%2FAM693802-12-2019.jpg?alt=media&token=546df765-a7ab-436b-80a9-0d289b3bc68b
      //https://firebasestorage.googleapis.com/v0/b/app-chat-2da1c.appspot.com/o/img%2FAM693802-12-2019.jpg?alt=media&token=546df765-a7ab-436b-80a9-0d289b3bc68b
      
     //return cliente.img
     return res
  }

}
