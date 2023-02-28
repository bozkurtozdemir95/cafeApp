import {Component, Input} from '@angular/core';
import {UiService} from "../../../ui/ui.service";
import products from '../../../constants/products';

@Component({
  selector: 'table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})
export class TableDetailComponent {
  @Input() table: any;

  orders: any = [
    {id: 1, product: products[0], piece: 3},
    {id: 2, product: products[12], piece: 1},
    {id: 3, product: products[13], piece: 1},
    {id: 4, product: products[20], piece: 5},
    {id: 5, product: products[26], piece: 7},
  ];

  constructor(public ui: UiService) {

  }

  removeOrder(item: any) {
    item.piece > 0 ? item.piece = item.piece - 1 : item.piece = 0;
  }

  addOrder(item: any) {
    item.piece = item.piece + 1;
  }

  calculateTotal() {
    let total = 0;
    this.orders.map((e: any) => {
      total += e.product.data.price * e.piece;
    })
    return total;
  }

}
