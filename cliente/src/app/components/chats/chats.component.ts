import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../servicios/auth.service'

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  usuario:string;
  constructor(private emailAuth:AuthService) { }

  ngOnInit() {
    //this.usuario=this.emailAuth.leerEmail()  
  }

}
