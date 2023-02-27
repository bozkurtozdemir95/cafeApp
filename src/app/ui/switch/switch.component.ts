import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();
  @Input() isChecked = false;

  onChangeValue($event: any) {
    this.changeValue.emit($event);
  }
}
