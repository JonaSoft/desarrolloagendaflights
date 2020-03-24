import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from '../../servicios/auth.service'
import { NgForm } from '@angular/forms';
import { usuarioModel} from '../../models/usuario.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:usuarioModel;
  alerta=false;
  constructor(
        private router: Router,
        public _auth: AuthService
   ) { }

  ngOnInit() {
     this.usuario = new usuarioModel();
     this.usuario.email='';
     this.usuario.password=''
  }
   //login(){
   //     this.router.navigate(['/home'])
   //}
   //logout(){
   //        this.router.navigate(['/notfound'])
   //}
   login(form:NgForm){
      if(form.invalid){
         console.log('form no valido');
         this.alerta=true;
         return
      }
      //console.log(this.usuario)
      //console.log(form)
      this._auth.login(this.usuario)
      .subscribe( res =>{
         console.log(res);
         this.router.navigateByUrl('/home')
      }, (err)=>{
         console.log(err.error.error.message)
      })
     

   }
   
}
