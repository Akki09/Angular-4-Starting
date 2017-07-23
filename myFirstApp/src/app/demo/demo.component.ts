import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  a:String = "Akshay Vakharia";

  str:String = "Hello";
  constructor() { }

  ngOnInit() {
  }

  clikcedFun = ()=>{
    alert("Hello Click is clicked");
  }
}
