import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-studentresults',
  templateUrl: './studentresults.component.html',
  styleUrls: ['./studentresults.component.css']
})
export class StudentresultsComponent implements OnInit {

  constructor(private router:Router) { }
  title ="ZPHS";

  studentResultsInfo:any=[
    {id:201,name:"Raju",Telugu:90,Hindi:77,English:85,Maths:72,Social:68,Science:98,Address:"12-10-587/77",City:"Hyderabad",PhoneNumber:9542355841,DOB:"22-07-2001"},
    {id:202,name:"Ravi",Telugu:92,Hindi:74,English:95,Maths:30,Social:77,Science:90,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:203,name:"Saju",Telugu:86,Hindi:85,English:93,Maths:89,Social:87,Science:88,Address:"10-587/77",City:"Hyderabad",PhoneNumber:9942365841,DOB:"02-01-2001"},
    {id:204,name:"Nikki",Telugu:46,Hindi:85,English:53,Maths:32,Social:87,Science:88,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:205,name:"Likki",Telugu:46,Hindi:85,English:53,Maths:68,Social:87,Science:70,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:206,name:"Mukesh",Telugu:46,Hindi:85,English:53,Maths:70,Social:87,Science:80,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:207,name:"Priya",Telugu:46,Hindi:85,English:53,Maths:77,Social:87,Science:84,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:208,name:"Sowjanya",Telugu:85,Hindi:80,English:92,Maths:76,Social:87,Science:85,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:209,name:"Lalitha",Telugu:46,Hindi:85,English:53,Maths:32,Social:87,Science:60,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:210,name:"Lekha",Telugu:80,Hindi:85,English:92,Maths:90,Social:87,Science:66,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:211,name:"Vinitha",Telugu:46,Hindi:85,English:53,Maths:42,Social:87,Science:76,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:212,name:"vani",Telugu:76,Hindi:85,English:53,Maths:62,Social:87,Science:65,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:213,name:"Ramya",Telugu:46,Hindi:85,English:53,Maths:32,Social:87,Science:72,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:214,name:"Swathi",Telugu:46,Hindi:85,English:53,Maths:32,Social:87,Science:32,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:215,name:"Mounika",Telugu:76,Hindi:85,English:63,Maths:82,Social:87,Science:66,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:216,name:"Sindu",Telugu:76,Hindi:85,English:53,Maths:66,Social:87,Science:55,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:217,name:"Harini",Telugu:46,Hindi:85,English:53,Maths:32,Social:87,Science:30,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:218,name:"Ramu",Telugu:96,Hindi:91,English:95,Maths:86,Social:88,Science:90,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:219,name:"Sudheer",Telugu:46,Hindi:85,English:53,Maths:88,Social:87,Science:70,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:220,name:"Sravani",Telugu:46,Hindi:85,English:53,Maths:32,Social:87,Science:88,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:221,name:"Sreeja",Telugu:46,Hindi:85,English:53,Maths:32,Social:87,Science:88,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:222,name:"Manasa",Telugu:46,Hindi:85,English:53,Maths:32,Social:87,Science:88,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:223,name:"Mamatha",Telugu:96,Hindi:85,English:83,Maths:85,Social:87,Science:88,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:224,name:"Madhu",Telugu:46,Hindi:85,English:53,Maths:37,Social:87,Science:88,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
    {id:225,name:"Dharani",Telugu:46,Hindi:85,English:53,Maths:35,Social:87,Science:88,Address:"12-111-587/77",City:"Hyderabad",PhoneNumber:9247134800,DOB:"23-05-2001"},
  ]

  ngOnInit(): void {
    this.examResults();
  };
  
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
        if(total>570){
          Grade="A+";
        }
        if(total>520){
          Grade="A";
        }
        else if(total>450){
          Grade="B+";
        }
        else if(total>420){
          Grade="B";
        }
        else{
          Grade="C";
        }
        let sturesults={id:sub.id,name:sub.name,Telugu:sub.Telugu,Hindi:sub.Hindi,English:sub.English,Maths:sub.Maths,Social:sub.Social,Science:sub.Science,total:total,avg:avg,pass_fail:pass_fail,Grade:Grade,Address:sub.Address,City:sub.City,PhoneNumber:sub.PhoneNumber,DOB:sub.DOB};
        
        this.StudentInfo.push(sturesults);
      });
    }

}
  


