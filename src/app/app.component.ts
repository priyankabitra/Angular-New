import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="ZPHS";

  studentResultsInfo:any=[
    {id:201,name:"Raju",Telugu:90,Hindi:77,English:85,Maths:72,Social:68,Science:98},
    {id:202,name:"Ravi",Telugu:92,Hindi:74,English:95,Maths:30,Social:77,Science:90},
    {id:203,name:"Saju",Telugu:86,Hindi:85,English:93,Maths:89,Social:87,Science:88},
    {id:203,name:"Nikki",Telugu:46,Hindi:85,English:53,Maths:32,Social:87,Science:88},
  ];
  
  ngOnInit(){
    this.examResults();
  }

  StudentInfo:any=[];

  total_pass:number=0;

    examResults(){

      this.studentResultsInfo.forEach((sub:any) => {
        let total=(sub.Telugu+sub.Hindi+sub.English+sub.Maths+sub.Social+sub.Science);
        let avg=(total/6).toPrecision(3);
        let pass_fail='';
        let Grade ='';
        if(sub.Telugu>=35 && sub.Hindi>=35 && sub.English>=35 && sub.Maths>=35 && sub.Social>=35 && sub.Science>=35){
        this.total_pass+=1;
          pass_fail='Pass';
        }else{
          pass_fail='Fail';
        }
        if(total>520){
          Grade="A";
        }
        else if(total>450){
          Grade="B";
        }
        else{
          Grade="C";
        }
        let sturesults={id:sub.id,name:sub.name,Telugu:sub.Telugu,Hindi:sub.Hindi,English:sub.English,Maths:sub.Maths,Social:sub.Social,Science:sub.Science,total:total,avg:avg,pass_fail:pass_fail,Grade:Grade};
        
        this.StudentInfo.push(sturesults);
      });
    }

}
