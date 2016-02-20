import {Component} from 'angular2/core'
import {Product} from './product'

@Component({
  selector: 'app-component',
  template: `
  <div class="inventory-app">
    <h1>{{ product.name }}</h1>
    <span>{{ product.sku }}</span>
  </div>
  `
})
class AppComponent {
  constructor () {
    console.log("AppComponent()")
    this.product = new Product(
      'NICEHAT', 'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99);
      console.log("AppComponent()")

  }
}

export { AppComponent }
