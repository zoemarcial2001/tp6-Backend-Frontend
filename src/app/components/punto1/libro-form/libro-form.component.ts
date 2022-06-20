import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {

  libro!:Libro;

  constructor(private libroServ: LibroService) { 
    this.libro=new Libro();
    
  }

  ngOnInit(): void {
  }

  cargarLibro(){
    this.libroServ.guardarLibro(this.libro).subscribe((re) => {
      if(re.status=="1"){
        alert(re.msg)
      }
      else{
        alert(re.msg)
      }
    })
  }

  destacado(){
    this.libro.destacado = true;
  }
}
