import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  indice!:number;
  libro!:Libro;
  libros!:Array<Libro>;

  constructor(private libroServ:LibroService) { 
    this.iniciar();
    this.libro = new Libro();
    this.indice=0;
    this.libros = new Array<Libro>();
  }

  ngOnInit(): void {
  }

  iniciar(){
    this.libroServ.getLibrosDestacados().subscribe((lib) => { 
        if(this.indice < lib.length){
        this.libro.descripcion = lib[this.indice].descripcion;
        this.libro.titulo = lib[this.indice].titulo;
        this.libro.imagen = lib[this.indice].imagen;
        this.libro.stock = lib[this.indice].stock;
      }
    });
  }

  siguiente(){
    this.indice = this.indice + 1;
    this.libroServ.getLibrosDestacados().subscribe((lib) => { 
      if(this.indice < lib.length){
      this.libro.descripcion = lib[this.indice].descripcion;
      this.libro.titulo = lib[this.indice].titulo;
      this.libro.imagen = lib[this.indice].imagen;
      this.libro.stock = lib[this.indice].stock;
    }
    else{
      if(this.indice == lib.length){
        this.indice = 0;
        this.libro.descripcion = lib[this.indice].descripcion;
        this.libro.titulo = lib[this.indice].titulo;
        this.libro.imagen = lib[this.indice].imagen;
        this.libro.stock = lib[this.indice].stock;
      }
    }
  });
  }

  anterior(){
    this.indice = this.indice - 1;
    this.libroServ.getLibrosDestacados().subscribe((lib) => { 
      if(this.indice < lib.length){
        if(this.indice < 0){
          this.indice = lib.length;
        }
        this.libro.descripcion = lib[this.indice].descripcion;
        this.libro.titulo = lib[this.indice].titulo;
        this.libro.imagen = lib[this.indice].imagen;
        this.libro.stock = lib[this.indice].stock;
      }
  });
  }

  
}
