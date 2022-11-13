import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  textoFinal:any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  cargar(texto: any){
    console.log(texto);
    this.textoFinal = texto;
  }

  /*Vamos a enviar el texto final al componente*/
  buscar(){
    this.route.navigate(['/buscar',this.textoFinal]);
    console.log("Navegamos a: " + '/buscar' + '/' + this.textoFinal);
  }

  regresar(){
    this.route.navigate(['/heroes']);
  }


}
