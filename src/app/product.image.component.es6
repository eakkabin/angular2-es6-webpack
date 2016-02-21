import {Component} from 'angular2/core'

@Component({
  selector: 'product-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
class ProductImage {

}

export {ProductImage}
