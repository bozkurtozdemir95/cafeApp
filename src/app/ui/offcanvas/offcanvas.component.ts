import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {
  @Input() showCanvas = true;
  @Input() toggle: ((args: any) => void) | any;

  constructor() {
  }
}
