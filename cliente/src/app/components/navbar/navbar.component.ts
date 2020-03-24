import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { AuthService } from '../../servicios/auth.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public usuario:string;
  public activo:string="estilomenu";
  constructor( private router: Router,
               private afAuth: AuthService
              ) { }

  ngOnInit() {
    this.usuario = this.afAuth.leerEmail()
  }
  
  logout(){
    this.afAuth.logout();
    this.router.navigateByUrl('/login')
  }

}
