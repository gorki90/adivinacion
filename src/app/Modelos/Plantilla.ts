import { Component, Directive, EventEmitter, Injectable, Input, Output } from "@angular/core";

export class Configuracion{

constructor(
  public nombre:string,
  public apellido:string,
  public rango:number,
  public intentos:number,
  public intro:number,
  public numero:number,
  public contador:number

){

}
}
