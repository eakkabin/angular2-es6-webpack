import {Component} from 'angular2/core'
import {DemoFormNgModel} from './demo_form_sku.component'

@Component({
  selector: 'app-component',
  directives: [DemoFormNgModel],
  template: `<h1>Hello angular2</h1>
  <demo-form-sku-builder>
  </demo-form-sku-builder>
  `
})
class AppComponent {
  constructor () {
  }
}

export { AppComponent }
