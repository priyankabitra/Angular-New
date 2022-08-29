import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  newsdata:any=[];
  newDate:any=[];
  country:any=[];

  ngOnInit(): void {
    this.getNews(this.newsdata,'everything').subscribe(N=>{
      console.log('NEWS RESULTS::::',N);
      this.newsdata=N;
    });
    this.newDate = new Date().toISOString().slice(0,10);
    
    // console.log('Date::::',this.newDate);
    
  }
  sortByCountry(e:any) {
    // this.country=e.target.value;
    console.log('111country::::',e.target.value);
    this.getNews(e.target.value,'top-headlines').subscribe(res=>{
      this.newsdata=res;
      console.log('country::::',this.newsdata);
    });
    
  }
  getNews(e:any,type:string){
    console.log('country::::',e);
    // let API_Key='ba1e8873d59a442b9d4d78f8ee22000f';
    if(type=='everything'){
      return this.http.get(`https://newsapi.org/v2/everything?q=tesla&from=${this.newDate}&sortBy=publishedAt&apiKey=ba1e8873d59a442b9d4d78f8ee22000f`);
    }else{
      return this.http.get(`https://newsapi.org/v2/top-headlines?country=${e}&apiKey=ba1e8873d59a442b9d4d78f8ee22000f`);
    }
    
  }
  
}
