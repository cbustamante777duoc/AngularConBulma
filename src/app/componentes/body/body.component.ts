import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComentarioService } from '../../servicios/comentario.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //EN CASO QUE QUIERA REFACTORIZAR EL CODIGO AGREGAR TODOS LOS OBJETOS EN UNA CLASE LLAMADA COMENTARIOS
  //PARA LUEGO EL ARREGLO DE LA CLASE COMENTARIO
  //o una interfase
  //https://www.educba.com/typescript-array-of-objects/

  // comentarios:any [] = [{
  //   nombre:"test 1 ",
  //   alias:"test1@correo.com ",
  //   comentario:"test 1 comentario realizado"
  // },{
  //   nombre:"test 2 ",
  //   alias:"test2@correo.com ",
  //   comentario:"test 2 comentario realizado"
  // },{
  //   nombre:"test 3 ",
  //   alias:"test3@correo.com ",
  //   comentario:"test 3 comentario realizado"
  // },{
  //   nombre:"test 4 ",
  //   alias:"test4@correo.com ",
  //   comentario:"test 4 comentario realizado"
  // },{
  //   nombre:"test 5 ",
  //   alias:"test5@correo.com ",
  //   comentario:"test 5 comentario realizado"
  // }];

  comentarios:any;
  nombre:any;
  comentario:any;

  constructor(private _comentarios:ComentarioService) { }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  agregarComentarios(){


    //es un objeto que se envia
    let auxComentario = {
      nombre: this.nombre,
      // alias: `@${this.nombre}`,
      comentario: this.comentario
    }

    //Agregando el comentarios al arreglo FORMA ANTIGUA
    // this.comentarios.push(auxComentario);

    this._comentarios.guardar(auxComentario)
     .subscribe(data =>{
       console.log("comentario guardado");
       //luego que guarda el comentario actualiza la pantalla
       this.obtenerComentarios();
     })


    //se limpia los valores de los inputs
    this.nombre = "";
    this.comentario = "";
  }

  //metodo que elimina los comentarios
  eliminarComentarios(indice:any){
    // this.comentarios.splice(indice,1);
    this._comentarios.eliminar(indice)
     .subscribe(data =>{
       console.log("comentario eliminado");
       //luego de eliminar refresca la pantalla
       this.obtenerComentarios();
     })

  }

  obtenerComentarios(){
    this._comentarios.obtener()
    .subscribe(data =>{
      this.comentarios = data;
      console.log(this.comentarios);
    })

  }



}
