import { Injectable } from '@angular/core';
//import { AngularFireModule } from '@angular/fire';
import { HttpClient } from '@angular/common/http';
import { usuarioModel} from '../models/usuario.model';

//import { AngularFireAuth } from '@angular/fire/auth';
//import * as firebase from 'firebase/app';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario: any={};
  private url='https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey='AIzaSyDW6WxVH-l3ZWogVOGgzKd5U7nBOTy3UH4';
  userToken:string;
  usuarioEmail:string
  constructor(
      //public afAuth: AngularFireAuth
      private http:HttpClient
   ){
      this.leerToken()
    }
   logout(){
         localStorage.removeItem('token');
         localStorage.removeItem('email')
   }

   login( usuario:any){
      const authData ={
         ...usuario,
         returnSecureToken: true
      };
      return this.http.post(
         `${ this.url }signInWithPassword?key=${ this.apiKey }`,
         authData 
      ).pipe(
         map(res => {
            console.log('entro en el map del RXJS');
            console.log(res);
            this.guardarToken(res['idToken']);
            this.guardarEmail(res['email']);
            return res;
         })

      )
   }
   private guardarToken(idToken:string){
         this.userToken = idToken;
         localStorage.setItem('token',idToken);
   }
   private guardarEmail(email:string){
      this.usuarioEmail = email;
      localStorage.setItem('email',email);
}

   //LEER TOKEN DEL LOCALSTORAGE
   leerToken(){
      if ( localStorage.getItem('token')){
            this.userToken = localStorage.getItem('token');
      } else {
            this.userToken = "";
      }
   }
   //LEER USUARIO
   leerEmail(){
      if ( localStorage.getItem('email')){
            console.log(localStorage.getItem('email'))
            return this.usuarioEmail = localStorage.getItem('email');
      } else {
            return this.usuarioEmail = "";
      }
   }

   //PREGUNTAR SI ESTA AUTENTICADO
   estaAutenticado(): boolean {
      return this.userToken.length > 10
   }
}
