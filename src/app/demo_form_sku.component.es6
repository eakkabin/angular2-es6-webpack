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

      <div class="field">
        <label for="skuInput">Product Name</label>
        <input type="text"
               [ngFormControl]="myForm.find('productName')"
               [(ngModel)]="productName">
      </div>
      <div class="ui info message">
        The Product name is: {{productName}}
      </div>

      <button type="submit" class="ui button">Submit!</button>
    </form>
  </div>
  `
})
export class DemoFormNgModel {

  constructor(fb) {
    this.fb = fb;
    this.myForm = this.fb.group({
      'productName': ['', Validators.required]
    })
  }

  static get parameters() {
    return [[FormBuilder]];
  }

  onSubmit(value) {
    console.log("you submitted value: ", value);
  }
}
