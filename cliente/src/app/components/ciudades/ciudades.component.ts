import { Component, OnInit, ɵConsole } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service'

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {
  public byciudades:boolean = false;
  public bypaises:boolean = true;
  public linkregresar:boolean =false;
  public verinput:boolean = true;
  public mensajecard:boolean = false;
  public encontro:boolean = false;
  constructor(private paises:PaisesService,
              private ciudades:PaisesService) { }
  public data = [];
  public dataciudades = [];
  public datafinal = [];
  public valor=" ";

  ngOnInit() {
    //this.data=[]
    this.paises.mostrarDataPaises()
    .subscribe((res)=>{
      for(let i in res){
        this.data.push(res[i])
      }
      console.log(this.data)
    })
  }

  searchCiudades (event:any):void{
    this.valor = event.target.value;
    this.valor = this.valor.toUpperCase();
    this.encontro=false;
    this.ciudades.mostrarDataCiudades()
    .subscribe(res=>{

      for(let i in res){
        
        
        //busca por code ciudad
        if (this.valor === res[i].codeciudad) {
          console.log(this.valor);
          this.dataciudades.push(res[i]);
         this.searchPaises(res[i].codepais)
         this.encontro= true
        }
        // busca por nombre de ciudad
        if (this.valor === res[i].nombreciudad){
          console.log('paso ciudad por nombre');
          this.dataciudades.push(res[i]);
          console.log(this.dataciudades)
          this.searchPaises(res[i].codepais)
          this.encontro= true
        } /*else{
          console.log('error');
          this.mensajecard=true;
          return
        }*/
        //this.searchPaises(res['ciudades'][i].codepais)
      }
      if (this.encontro==false){
        this.mensajecard=true;
        this.linkregresar= true
      }
      //console.log(this.dataciudades);
      /*if (this.dataciudades.length==0){
        this.verinput= false;  
        this.linkregresar= true;
        this.mensajecard=true;
      }*/
      this.bypaises=false;
      this.byciudades=true;
      this.verinput= false
    })
   
  }
  searchPaises (valor:any){
    console.log('codigo de pais ',valor);
    
    for(let i in this.data){
        if (valor == this.data[i].alpha2Code){
          this.dataciudades.push(this.data[i])
          console.log(this.dataciudades);
          if (this.dataciudades[1].regionalBlocs.length==0){
            this.datafinal.push({
              codeciudad: this.dataciudades[0].codeciudad,
              nombreciudad: this.dataciudades[0].nombreciudad,
              codepais: this.dataciudades[0].codepais,
              namepais: this.dataciudades[1].name,
              capitalpais: this.dataciudades[1].capital,
              region: this.dataciudades[1].region,
              subregion: this.dataciudades[1].subregion,
              timezones: this.dataciudades[1].timezones[0],
              fronteras: this.dataciudades[1].borders,
              callingcodes: this.dataciudades[1].callingCodes[0],
              numericodepais: this.dataciudades[1].numericCode,
              flag: this.dataciudades[1].flag,
              /*regionalacron: this.dataciudades[1].regionalBlocs[0].acronym,*/
              //regionalname: this.dataciudades[1].regionalBlocs[0].name,
              lat: this.dataciudades[1].latlng[0],
              lon: this.dataciudades[1].latlng[1]
            })
            //this.dataciudades=[]
          }else{
            this.datafinal.push({
              codeciudad: this.dataciudades[0].codeciudad,
              nombreciudad: this.dataciudades[0].nombreciudad,
              codepais: this.dataciudades[0].codepais,
              namepais: this.dataciudades[1].name,
              capitalpais: this.dataciudades[1].capital,
              region: this.dataciudades[1].region,
              subregion: this.dataciudades[1].subregion,
              timezones: this.dataciudades[1].timezones[0],
              fronteras: this.dataciudades[1].borders,
              callingcodes: this.dataciudades[1].callingCodes[0],
              numericodepais: this.dataciudades[1].numericCode,
              flag: this.dataciudades[1].flag,
              regionalacron: this.dataciudades[1].regionalBlocs[0].acronym,
              regionalname: this.dataciudades[1].regionalBlocs[0].name,
              lat: this.dataciudades[1].latlng[0],
              lon: this.dataciudades[1].latlng[1]
            })
            //this.dataciudades=[]
          }
          this.dataciudades=[]
        }
    }
    this.linkregresar=true;
    console.log(this.datafinal)
}
  regresar(){
    this.mensajecard = false;
    this.byciudades = false;
    this.bypaises = true;
    this.linkregresar = false;
    this.verinput = true;
    this.datafinal = [];
    this.dataciudades = []
  }
  
}
