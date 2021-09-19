import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  comentarios:any [] = [{
    nombre:"test 1 ",
    alias:"test1@correo.com ",
    comentario:"test 1 comentario realizado"
  },{
    nombre:"test 2 ",
    alias:"test2@correo.com ",
    comentario:"test 2 comentario realizado"
  },{
    nombre:"test 3 ",
    alias:"test3@correo.com ",
    comentario:"test 3 comentario realizado"
  },{
    nombre:"test 4 ",
    alias:"test4@correo.com ",
    comentario:"test 4 comentario realizado"
  },{
    nombre:"test 5 ",
    alias:"test5@correo.com ",
    comentario:"test 5 comentario realizado"
  }];

  nombre:any;
  comentario:any;

  constructor() { }

  ngOnInit(): void {
  }

  agregarComentarios(){
    console.log(this.nombre);
    console.log(this.comentario);
  }
}
