"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_article_component_1 = require('./app-article.component');
var article_1 = require('./article');
var AppComponent = (function () {
    function AppComponent() {
        this.articles = [
            new article_1.Article('Angular', 'https://angular.com', 100),
            new article_1.Article('D3', 'https://github.com/d3.js', 10),
            new article_1.Article('Github', 'https://github.com/subbu1125', 20),
        ];
    }
    AppComponent.prototype.addArticle = function (title, link) {
        console.log("adding " + title.value + " and " + link.value);
        this.articles.push(new article_1.Article(title.value, link.value, 0));
        title.value = '';
        link.value = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [app_article_component_1.ArticleComponent],
            templateUrl: '../partials/main.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map