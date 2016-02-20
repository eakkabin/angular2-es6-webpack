import {bootstrap} from 'angular2/platform/browser';
// import {AppComponent} from './app.component';
import {ArticleComponent} from './reddit.article.component';

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(ArticleComponent).catch(err => console.error(err));
});
// Expose boot so it can be required by webpack.
module.exports = boot;
