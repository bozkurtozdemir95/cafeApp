import {Component, Input} from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() text: string = "";
  @Input() type: string = "" /* primary, secondary, success, warning, danger, outline*/;
}
