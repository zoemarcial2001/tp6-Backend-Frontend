export class Libro {
    titulo!:string;
    descripcion!:string;
    imagen!:string;
    stock!:number;
    destacado!:boolean;

    constructor(){
       this.destacado=false;
    }
}
