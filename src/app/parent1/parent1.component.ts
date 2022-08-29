import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  constructor() { }
  p:any='';

  ngOnInit(): void {
  }

  obj:any=[{name:"priya",mob:"9542355841",dob:"12-5-1998"}];

  receiveData(e:any){
    console.log(e)
    this.p=e;
  }
}
