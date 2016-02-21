import {Component} from 'angular2/core'
import {NgFor} from 'angular2/common'

@Component({
  selector: 'product-department',
  inputs: ['product'],
  template: `
  <div class="product-department">
    <span
      *ngFor="#name of product.department; #i=index">
      <a href="#">{{ name }}</a>
      <span>{{ i < (product.department.length - 1) ? '>' : '' }}</span>
    </span>
  </div>
  `
})
class ProductDepartment {

}

export {ProductDepartment}
