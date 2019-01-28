import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
   password="tuna";
   abc = false;
   log=[];
   i=1;

  constructor() { }

  ngOnInit() {
  }
  onButtonClick(){
    this.abc = !this.abc;
    this.log.push(this.i++);
    
  }
  // onDiasable


}
