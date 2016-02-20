import {Component} from 'angular2/core'
import {Article} from './article'
import {ArticleComponent} from './reddit.article.component';
import {NgFor} from 'angular2/common'

@Component({
  selector: 'app-component',
  directives: [ArticleComponent],
  template: `
<form class="ui large form segment">
  <h3 class="ui header">Add a Link</h3>

  <div class="field">
    <label for="title">Title: </label>
    <input name="title" #newtitle>
  </div>
  <div class="field">
    <label for="link">Link: </label>
    <input name="link" #newlink>
  </div>

  <button class="ui positive button"
    (click)="addArticle(newtitle, newlink)">
    Submit link
  </button>
</form>
<div class="ui grid posts">
  <reddit-article
    *ngFor="#article of sortedArticles()"
    [article]="article">
  </reddit-article>
</div>
  `
})
class AppComponent {
  constructor () {
    this.articles = [
      new Article('Angular2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('AngularJS', 'http://angular.org', 1)
    ]
  }

  addArticle (title, link) {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
  }

  sortedArticles () {
    return this.articles.sort((a,b) => b.votes - a.votes);
  }

}

export { AppComponent }
