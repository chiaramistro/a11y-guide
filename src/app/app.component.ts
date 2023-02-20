import { Component } from '@angular/core';
import { AccessibilityCase } from './models/accessibility-case';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public accessibilityCases = [
    { title: AccessibilityCase.Lists, url: '/folder/' + AccessibilityCase.Lists },
    { title: AccessibilityCase.Buttons, url: '/folder/' + AccessibilityCase.Buttons },
    { title: AccessibilityCase.Labels, url: '/folder/' + AccessibilityCase.Labels },
    { title: AccessibilityCase.Inputs, url: '/folder/' + AccessibilityCase.Inputs },
  ];
  constructor() {}

  public onChangeMode(event: any) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

}
