import { Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="olá mundo"></app-title>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, OnChanges{
  constructor() {}

  ngOnInit(): void {
    // setTimeout( ()=> {
    //   console.log(1);
    // }, 5000)
  }


  ngOnChanges(): void {

  }
}
