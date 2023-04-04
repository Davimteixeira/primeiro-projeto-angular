import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
  <!-- <app-data-biding></app-data-biding> -->
  <!-- <app-diretivas-atributos>
    <h1>Aulas De Diretivas de atributos</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>

  <app-diretivas-atributos>
    <h1>Davi</h1>
    <h3>Magalhaes</h3>
  </app-diretivas-atributos> -->
  <!-- <app-diretivas-atributos></app-diretivas-atributos> -->
  <app-new-component></app-new-component>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {}

}
