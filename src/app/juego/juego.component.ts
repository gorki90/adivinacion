import { Component, HostListener, OnInit } from '@angular/core';
import { Configuracion } from "../Modelos/Plantilla";


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})



export class JuegoComponent implements OnInit {
  adivina = new Configuracion("", "", 0, 0,0,0,0);
  mensaje:string="Ongi Etorri"
  visibilidad:string="none"
  resta:number=0
  h3:string="none"
  h32:string="none"
  h33:string="none"
  h34:string="none"
  arrayIntro:Array<number>=[]

  
  ngOnInit(): void {
      
  }

  recogerDatos(){
    
    
    var nombre:string=this.adivina.nombre
    var apellido:string=this.adivina.apellido
    var rango:number=this.adivina.rango
    var intentos:number=this.adivina.intentos
    this.resta=this.adivina.intentos
    
    

    if(nombre && apellido !="" && rango>0 && intentos>0){
      console.log(this.adivina.nombre)
      this.adivina.numero=Math.round(Math.random()*rango)
      console.log("El número aleatório es: "+this.adivina.numero) 
      this.visibilidad="block"
    
    }else{
      alert("Rellena los datos")
    }
  
  }

  restar(){
    this.resta--
    return this.resta
  }

 contar(){
  this.adivina.contador++
  return this.adivina.contador 
}
 

  
  adivinar(){
    
    var intro:number=this.adivina.intro
    var intentos:number=this.adivina.intentos
    var numero=this.adivina.numero
    var rango=this.adivina.rango
    var contador=this.contar()
     this.resta=this.restar()
     this.arrayIntro.push(this.adivina.intro);
   
    console.log(contador)

  if(rango<intro){
    alert("El número introducido es mayor de lo posible")
  }
 if(intro==numero){
       this.h3="block"
       this.h32="none"
       this.h34="block"
       setTimeout(() => {
        this.reiniciar()
    }, 1000)
    }else if(contador<intentos){
      this.h32="block"
      this.h3="none"
    }else{
      this.h33="block"
      this.h32="none"
      this.h3="none"
      this.resta=0
      this.h34="block"
      setTimeout(() => {
        this.reiniciar()
    }, 1000)
    }  
    console.log("Quedan: " ,this.resta)
    console.log(this.arrayIntro)
}
 
reiniciar(){
  this.adivina.nombre=""
  this.adivina.apellido=""
  this.adivina.intro=0
  this.adivina.rango=0
  this.adivina.intentos=0
  this.adivina.numero=0
  this.adivina.contador=0
  this.resta=0
  this.visibilidad="none"
  this.h33="none"
  setTimeout(() => {
    window.location.reload()
}, 2000)
  
}

}

