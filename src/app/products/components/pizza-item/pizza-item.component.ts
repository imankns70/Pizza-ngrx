
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';

@Component({
  selector: 'pizza-item',
  styleUrls: ['./pizza-item.component.scss'],
  template: `   <div class="pizza-item">
  <a [routerLink]="['/products', pizza.id]">
    <pizza-display
      [pizza]="pizza">
    </pizza-display>
    <h4>{{ pizza.name }}</h4>
    <button type="button" class="btn btn__ok">
      View Pizza
    </button>
  </a>
</div>`,
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza: any;
  constructor() { }

  ngOnInit() {
  }

}
