import {Component} from 'angular2/core'
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  FormBuilder,
  ControlGroup,
  Validators,
  AbstractControl
} from 'angular2/common'

function skuValidator(control) {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
  selector: 'demo-form-sku-builder',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: Sku with FormBuilder</h2>
    <form class="ui form"
      [ngFormModel]="myForm"
      (ngSubmit)="onSubmit(myForm.value)">

      <div class="field"
          [class.error]="!sku.valid && sku.touched">
        <label for="skuInput">SKU</label>
        <input type="text"
               id="skuInput"
               placeholder="SKU"
               [ngFormControl]="sku">
         <div *ngIf="!sku.valid"
           class="ui error message">SKU is invalid</div>
         <div *ngIf="sku.hasError('required')"
           class="ui error message">SKU is required</div>
      </div>

      <div *ngIf="!myForm.valid"
        class="ui error message">Form is invalid</div>

      <button type="submit" class="ui button">Submit!</button>
    </form>
  </div>
  `
})
class DemoFormSkuBuilder {

  constructor(fb) {
    this.fb = fb;
    this.myForm = this.fb.group({
      'sku': ['', Validators.compose([Validators.required, skuValidator])]
    })
    this.sku = this.myForm.controls['sku'];
  }

  static get parameters() {
    return [[FormBuilder]];
  }

  onSubmit(value) {
    console.log("you submitted value: ", value);
  }
}
export {DemoFormSkuBuilder}
