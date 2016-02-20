import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(AppComponent).catch(err => console.error(err));
});
console.log("test!");
// Expose boot so it can be required by webpack.
module.exports = boot;
