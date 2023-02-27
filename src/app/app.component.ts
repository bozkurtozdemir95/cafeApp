import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {UiService} from "./ui/ui.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CafeApp';

  constructor(private translate: TranslateService, public ui: UiService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('tr');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('tr');

    document.body.classList.add(ui.theme);

  }
}
