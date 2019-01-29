import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input('srvrElement') element: {type:string,name:string,content:string};
  constructor() { 
    console.log('constructor called!');
  }
   ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
   }
  ngOnInit() {
    console.log('ngOnInitcalled!');
  }
  ngDoCheck(){
    console.log('called Docheck');
  }
  ngAfterContentInit(){
    console.log('aftercontent called!');
  }
}
