import {Component} from 'angular2/core'
import {FORM_DIRECTIVES} from 'angular2/common'

@Component({
  selector: 'demo-form-sku',
  directives: [FORM_DIRECTIVES],
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: Sku</h2>
    <form class="ui form"
      #f="ngForm"
      (ngSubmit)="onSubmit(f.value)">
      <div class="field">
        <label for="skuInput">SKU</label>
        <input type="text" id="skuInput" placeholder="SKU"
          ngControl="sku">
      </div>

      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>
  `
})
class DemoFormSku {
  onSubmit(form) {
    console.log("you submitted value: ", form);
  }
}
export {DemoFormSku}
