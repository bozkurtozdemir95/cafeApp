import {Component} from '@angular/core';
import products from '../../constants/products';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  preNavs = [
    {link: 'dashboard', text: 'menu.dashboard'},
    {link: 'menu', text: 'menu.menu'},
  ];
  categories = [
    "all", "starters", "main_dishes", "pizza", "deserts", "hot_drinks", "beverages"
  ];
  activeCategory = this.categories[1];

  perPage = 10;
  products: any;
  filteredProducts: any = [];

  constructor() {
    this.getProducts()
  }

  changeCategory(item: string) {
    this.activeCategory = item;
    this.filteredProducts = [];
    this.products.find((e: any) => {
      if (this.activeCategory === "all") {
        this.filteredProducts = this.products;
      } else if (e.category === this.activeCategory) {
        this.filteredProducts.push(e);
      }
    })
  }

  changePerPage(count: number) {
    this.perPage = count;
  }

  productSelected(event: any, item: any) {
    event.target.checked ? item.selected = true : item.selected = false;
  }

  getProducts() {
    this.products = Object.values(products.reduce((c, {category, data}) => {
      c[category] = c[category] || {category, data: []};
      c[category].data.push(data);
      return c;
    }, {}));
    this.filteredProducts = this.products;
  }

  selectAll() {
    this.filteredProducts.find((e: any) => {
      for (let x of e.data) {
        x.selected = true;
      }
    })
  }

  clearSelection(){
    this.filteredProducts.find((e: any) => {
      for (let x of e.data) {
        x.selected = false;
      }
    })
  }
}
