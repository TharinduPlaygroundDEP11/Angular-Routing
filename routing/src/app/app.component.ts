import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <router-outlet />
  `
})
export class AppComponent {
  title = 'routing';
}
