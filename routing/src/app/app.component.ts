import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <!--<app-main />-->
    <app-login />
  `
})
export class AppComponent {
  title = 'routing';
}
