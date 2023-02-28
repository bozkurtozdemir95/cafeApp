import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  theme = 'light-mode';
  menuAlreadyToggled = false;
  hideMainMenu = false;
  hideSubMenu = true;
  activeSubmenu: any = [];
  showTableDetails = false;
  activeTable: any = {};

  constructor() {
  }

  toggleSidebar() {
    if (!this.hideSubMenu) {
      this.closeSubMenu();
      return;
    }
    this.hideMainMenu = !this.hideMainMenu;
  }

  toggleSubMenu(item: any) {
    this.activeSubmenu = item;
    this.hideSubMenu = !item.sub;
  }

  closeSubMenu() {
    this.hideSubMenu = true;
  }

  switchTheme($event: any) {
    const checked = $event.target.checked;

    if (checked) {
      this.theme = 'dark-mode'
      document.body.classList.add(this.theme);
      document.body.classList.remove('light-mode');
    } else {
      this.theme = 'light-mode'
      document.body.classList.add(this.theme);
      document.body.classList.remove('dark-mode');
    }
  }

  toggleTableDetail = (table: any): void => {
    this.activeTable = table;
    if(this.showTableDetails){
      this.showTableDetails = false;
      this.activeTable = {};
    } else{
      this.showTableDetails = true;
    }
  }
}
