import { Component } from '@angular/core';
import {Article } from './article';
@Component({
  selector:'article',
  inputs:['article'],
  host:{
  class:'row'
  },
  templateUrl:'../partials/article.html'
})
export class ArticleComponent{
article:Article;
constructor(){
this.article=new Article('Angular2','http://angular.io',10);
}
voteUp():boolean{
this.article.votes +=1;
return false;
}
voteDown():boolean {
this.article.votes -=1;
return false;
}
}
