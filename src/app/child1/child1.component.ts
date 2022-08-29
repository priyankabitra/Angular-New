import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() parent:any;
  @Input() objData:any;

  @Output() info = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

    sendToParent(){
      let obj={Id:"1",name:"priya",Mob:"9542355841",dob:"12-5-1998"}
      this.info.emit(obj);
    }

}
