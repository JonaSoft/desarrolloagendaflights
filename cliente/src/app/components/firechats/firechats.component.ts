import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirestorechatsService } from '../../servicios/firestorechats.service'
import { AuthService} from '../../servicios/auth.service'
//import { Mensaje } from '../../interfaces/mensaje.interface';


@Component({
  selector: 'app-firechats',
  templateUrl: './firechats.component.html',
  styleUrls: ['./firechats.component.css']
})
export class FirechatsComponent implements OnInit {
  mensaje:string ="";
  elemento:any;
  public usuarionombre:string="";
  public chats: Observable<any[]>;
  public mensajes:any[]=[]
  

  constructor(db: AngularFirestore,
              public _cs: FirestorechatsService,
              public _usuario: AuthService) {

    this.usuarionombre = this._usuario.leerEmail() 
    //oir cambios en collecciones de chats            
    //this.chats = db.collection('chats').valueChanges();

    //cargar mensajes des el servicio
    this._cs.cargarMensajes()
      .subscribe( ()=>{
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 25);
         
      });

  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje(){
    console.log(this.mensaje);
    if (this.mensaje.length === 0){
      return
    }
    this.usuarionombre = this._usuario.leerEmail() 
    console.log(this.usuarionombre)
    this._cs.agregarMensajes(this.mensaje,this.usuarionombre)
      .then(()=>this.mensaje="")
      .catch((err)=>console.log(err))
  }
  

}
