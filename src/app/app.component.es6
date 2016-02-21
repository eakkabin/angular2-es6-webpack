import {Component} from 'angular2/core'
import {Product} from './product'
import {ProductList} from './product.list.component'

@Component({
  selector: 'app-component',
  directives: [ProductList],
  template: `
  <div class="inventory-app">
    <products-list
      [productList]="products"
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>`
  //input:  [productList]="products"
  //output: (onProductSelected)="productWasSelected($event)
})
class AppComponent {
  constructor () {
    this.products = [
      new Product(
        'MYSHOES', 'Black Running Shoes',
        '/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET', 'Blue Jacket',
        '/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT', 'A Nice Black Hat',
        '/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product) {
    console.log("Product clicked: ", product);
  }
}

export { AppComponent }
