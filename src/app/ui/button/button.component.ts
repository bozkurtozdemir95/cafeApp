import {Component, Input} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() className: string = "";
  @Input() type: string = "" /* primary, secondary, success, warning, danger, outline*/;
  @Input() size: string = ""; /* xs, sm, lg */
  @Input() active: boolean = false;

}
