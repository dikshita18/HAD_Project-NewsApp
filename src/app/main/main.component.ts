import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mArticles:Array<any>;
  mSources:Array<any>;

  isShow = false;

  constructor(private newsapi:NewsApiService ){
    console.log('app component constructor called');         
  }

  ngOnInit() {
        //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  
    toggleClick(){
    this.isShow = !this.isShow;
    }

    onChange(value:any) {
      if (value.checked === true) {
      var docmenu:any = document.getElementById('menudark');
    docmenu.setAttribute("style", "background-color:#000000;color:whitesmoke");

    var divdark:any = document.getElementById('div-dark');
    divdark.setAttribute("style", "background-color:#000000");
    
    var cdark:any = document.getElementsByClassName('card-dark');
    for (let n = 0; n < cdark.length; n++) {
      let elem = cdark[n];
      elem.setAttribute("style", "background-color:#121212;color:white");
    }
    var btn:any = document.getElementsByClassName('btn');
    for (let k = 0; k < btn.length; k++) {
      let element = btn[k];
      element.setAttribute("style", "background-color:#000000;color:white");
    }
    var text:any = document.getElementsByTagName('p');
    for (let j = 0; j < text.length; j++) {
      let element = text[j];
      element.setAttribute("style", "color:whitesmoke");
    }
    var head:any = document.getElementById("header");
    head.setAttribute("style", "background-color:#f9862e;color:whitesmoke");

    var li:any = document.getElementsByClassName('li');
    for (let k = 0; k < li.length; k++) {
      let e = li[k];
      e.setAttribute("style", "background-color:#000000;color:white");
    }
  }
    if (value.checked != true){
      var docmenu:any = document.getElementById('menudark');
    docmenu.setAttribute("style", "background-color:#ffffff;color:black");

    var divdark:any = document.getElementById('div-dark');
    divdark.setAttribute("style", "background-color:whitesmoke");
    
    var cdark:any = document.getElementsByClassName('card-dark');
    for (let n = 0; n < cdark.length; n++) {
      let elem = cdark[n];
      elem.setAttribute("style", "background-color:#ffffff;color:black");
    }
    var btn:any = document.getElementsByClassName('btn');
    for (let k = 0; k < btn.length; k++) {
      let element = btn[k];
      element.setAttribute("style", "background-color:#ffffff;color:primary");
    }
    var text:any = document.getElementsByTagName('p');
    for (let j = 0; j < text.length; j++) {
      let element = text[j];
      element.setAttribute("style", "color:#777777");
    }
    var li:any = document.getElementsByClassName('li');
    for (let k = 0; k < li.length; k++) {
      let e = li[k];
      e.setAttribute("style", "color:black");
    }
    var head:any = document.getElementById("header");
    head.setAttribute("style", "background-color:teal;color:whitesmoke");
    }
  }
}



