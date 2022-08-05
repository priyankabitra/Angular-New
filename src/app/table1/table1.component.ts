import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  constructor() { }
    table1:any=[];
    tables:any=[];
    // onetotwenty:any=[];
    // twenty:any=[];
    
  ngOnInit(): void {
    this.testResults();
  }
    testResults(){
      for(let k=1;k<=10;k++){
        this.table1.push({k:k})
      }
      for(let j=101;j<=200;j++){
        if(j%2!=0 && (j<=101 ||(j>=101 && j<=110) || (j>120 && j<=130) || (j>140 && j<=150) || (j>160 && j<=170) || (j>180 && j<=190))){
          this.tables.push({j:j})
        
        }else if (j % 2 ==0 && ((j>=111 && j<=120) || (j>130 && j<=140) || (j>150 && j<=160) || (j>170 && j<=180) || (j>190 && j<=200))){
          this.tables.push({j:j})
        
        }
        // else if(j>120 && j<=130){
        //   if(j % 2 !=0){
        //     this.tables.push({j:j})
        //   }
        // }else if(j>130 && j<=140){
        //   if(j % 2 ==0){
        //     this.tables.push({j:j})
        //   }
        // }else if(j>140 && j<=150){
        //   if(j % 2 !=0){
        //     this.tables.push({j:j})
        //   }
        // }else if(j>150 && j<=160){
        //   if(j % 2 ==0){
        //     this.tables.push({j:j})
        //   }
        // }else if(j>160 && j<=170){
        //   if(j % 2 !=0){
        //     this.tables.push({j:j})
        //   }
        // }else if(j>170 && j<=180){
        //   if(j % 2 ==0){
        //     this.tables.push({j:j})
        //   }
        // }else if(j>180 && j<=190){
        //   if(j % 2 !=0){
        //     this.tables.push({j:j})
        //   }
        // }
        // else if(j>190 && j<=200){
        //   if(j % 2 ==0){
        //     this.tables.push({j:j})
        //   }
        // }
        }                            
        
        
        
      // }
     

      // for(let a = 1;a<=10;a++){
      //   this.onetotwenty.push({num:a});
      // }

      // for(let b = 1;b<=13;b++){
      //   this.twenty.push({no:b*5});
      // }

    }
}
