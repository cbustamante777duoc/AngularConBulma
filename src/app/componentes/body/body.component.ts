import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  nombre:any;
  comentarios:any;

  constructor() { }

  ngOnInit(): void {
  }

  agregarComentarios(){
    console.log(this.nombre);
    console.log(this.comentarios);
  }
}
