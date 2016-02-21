import {Component} from 'angular2/core'
import {EventEmitter} from 'angular2/core'
@Component({
  selector: 'products-list',
  directives: [ProductRow],
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
  <div class="ui items">
    <product-row
      *ngFor="#myProduct of productList"
      [product]="myProduct"
      (click)="clicked(myProduct)"
      [class.selected]="isSelected(myProduct)">
    </product-row>
  </div>
  `
})
class ProductList {
  /*
  * @input productList - the Product [] passed to us
  * @output onProductSelected - outputs the current
  *         Product whenever a new Product is selected
  * @property currentProduct - local state containning
  *         the currently selected `Product`
  */
  constructor () {
    this.onProductSelected = new EventEmitter();
  }

  clicked (product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected (product) {
    if(!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
