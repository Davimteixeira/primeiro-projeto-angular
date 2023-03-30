import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Dener";
  public idade: number = 29;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png"
  public imgTitle: string = "property biding"

  public position: {x: number, y: number}  = {x: 0 , y:0}
  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(){
    alert("deu bom!");
  }
  public alertaInfo2(valor:string){
    alert(valor)
  }

  public alertaInfo3(valor:MouseEvent){
    console.log(valor)
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }


}
