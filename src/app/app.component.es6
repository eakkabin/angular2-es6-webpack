import {Component} from 'angular2/core'
import {DemoFormSkuBuilder} from './demo_form_sku.component'

@Component({
  selector: 'app-component',
  directives: [DemoFormSkuBuilder],
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
