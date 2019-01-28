import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  username="";
  constructor() { }
  
  ngOnInit() {
  }
  
  // onNameEnter(event:Event){
  //   this.username=(<HTMLInputElement>event.target).value;
  // }

  isButtonDisabled= () => {
   return this.username.length === 0 ? true : null;
  }

  onButtonClick=() =>{
    this.username = '';
  }
}
