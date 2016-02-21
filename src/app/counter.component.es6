import {Component} from 'angular2/core'

@Component({
  selector: 'counter';
  template: `
  {{ value }}
  <button (click)="increase()"></button>
  <button (click)="decrease()"></button>
  `
})
class Counter {
  constructor () {
    this.value = 1;
  }

  increase () {
    this.value += 1;
  }

  decrease () {
    this.value -= 1;
  }
}
