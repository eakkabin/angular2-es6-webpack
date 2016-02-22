import {Component} from 'angular2/core'
import {DemoFormSku} from './demo_form_sku.component'

@Component({
  selector: 'app-component',
  directives: [DemoFormSku],
  template: `<h1>Hello angular2</h1>
  <demo-form-sku>
  </demo-form-sku>
  `
})
class AppComponent {
  constructor () {
  }
}

export { AppComponent }
