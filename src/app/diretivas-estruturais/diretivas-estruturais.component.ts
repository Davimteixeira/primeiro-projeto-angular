import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit{

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Davi Magalhães", idade: 18},
    {nome: "José", idade: 22},
    {nome: "Thomas", idade: 11},
  ];

  public nome: string = 'davi';
  constructor() {}

  ngOnInit(): void {

    setInterval(  ()=>{
      if (this.condition){
        this.condition = false
      }else{
        this.condition = true;
      }
    }, 2000)
  }

  public onClick(){
    if (this.condition){
      this.conditionClick = false
    }else{
      this.conditionClick = true;
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Nay", idade:31});
  }

  public onClickEventList(event: number){
    this.list.slice(event, 1)
  }
}
