import {Component} from 'angular2/core'
import {EventEmitter} from 'angular2/core'
import {NgFor} from 'angular2/common'
import {ProductRow} from './product.row.component'

@Component({
  selector: 'products-list',
  directives: [ProductRow],
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
  <div class="ui items">
    <product-row
      *ngFor="#product of productList"
      [product]="product"
      (click)="clicked(product)"
      [class.selected]="isSelected(product)">
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
export {ProductList}
