import {Component} from 'angular2/core'
import {NgFor} from 'angular2/common'

@Component({
  selector: 'app-component',
  template: `<h1>My first Angular2 - {{ name }}</h1>
  <ul>
    <li *ngFor="#skill of skills">{{skill}}!!</li>
  </ul>
  `
})
class AppComponent {
  constructor () {
    this.name = 'GolfJR';
    this.skills = ['Angular', 'Rails'];
  }

}

export { AppComponent }
