import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {UiService} from "../../ui/ui.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isFullScreen = false;
  languages = [
    {key: 'en', label: 'English'},
    {key: 'tr', label: 'Türkçe'},
  ];

  notifications = [
    {id: 1, text: 'Table 1 just ordered.', date: '25.02.2023', time: '12:45'},
    {id: 2, text: 'Table 1 just ordered.', date: '25.02.2023', time: '12:45'},
    {id: 3, text: 'Table 1 just ordered.', date: '25.02.2023', time: '12:45'},
    {id: 4, text: 'Table 1 just ordered.', date: '25.02.2023', time: '12:45'},
  ];

  constructor(public translate: TranslateService, public ui: UiService) {
  }

  changeLanguage(key: string) {
    this.translate.use(key);
  }

  deleteNotification(id: number) {

  }

  fullScreenClick() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }


}
