import { Component } from '@angular/core';
import {ArticleComponent} from './app-article.component';
import {Article } from './article';
@Component({
  selector: 'my-app',
  directives:[ArticleComponent],
  templateUrl: '../partials/main.html'
})

export class AppComponent {
articles:Article[];
constructor(){
this.articles=[
new Article('Angular','https://angular.com',100),
new Article('D3','https://github.com/d3.js',10),
new Article('Github','https://github.com/subbu1125',20),
];
}
addArticle(title:HTMLInputElement,link:HTMLInputElement):void{
console.log(`adding ${title.value} and ${link.value}`);
this.articles.push(new Article(title.value,link.value,0));
title.value='';
link.value='';
}
}
