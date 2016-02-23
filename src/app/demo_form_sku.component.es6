import {Component} from 'angular2/core'
import {
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators
} from 'angular2/common'

@Component({
  selector: 'demo-form-sku-builder',
  directives: [FORM_DIRECTIVES],
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: Sku with FormBuilder</h2>
    <form class="ui form"
      [ngFormModel]="myForm"
      (ngSubmit)="onSubmit(myForm.value)">
      <div class="field">
        <label for="skuInput">SKU</label>
        <input type="text"
          id="skuInput"
          placeholder="SKU"
          [ngFormControl]="myForm.controls['sku']">
      </div>

      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>
  `
})
class DemoFormSkuBuilder {

  constructor(fb) {
    this.fb = fb;
    this.myForm = this.fb.group({
      'sku': ['', Validators.required]
    })
  }

  static get parameters() {
    return [[FormBuilder]];
  }

  onSubmit(value) {
    console.log("you submitted value: ", value);
  }
}
export {DemoFormSkuBuilder}
