import {Component} from 'angular2/core'
import {ArticleComponent} from './reddit.article.component';

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
  <reddit-article>
  </reddit-article>
</div>
  `
})
class AppComponent {
  constructor () {
  }

  addArticle(title, link) {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
  }

}

export { AppComponent }
