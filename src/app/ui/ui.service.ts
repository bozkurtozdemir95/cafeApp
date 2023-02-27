import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  theme = 'dark-mode';
  hideMainMenu = false;
  hideSubMenu = false;
  activeSubmenu: any;

  constructor() {
  }

  toggleSidebar() {
    this.hideMainMenu = !this.hideMainMenu;
  }

  toggleSubMenu(item: any) {
    if (item.sub) {
      this.hideSubMenu = true;
      if (item.id === this.activeSubmenu.id) {
        this.hideSubMenu = false;
      }
    } else {
      this.hideSubMenu = false;
    }
    this.activeSubmenu = item;
    console.log(item);
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
}
