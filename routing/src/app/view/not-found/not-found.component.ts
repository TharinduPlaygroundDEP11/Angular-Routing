import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="flex h-screen justify-center items-center flex-col">
      <h1 class="text-9xl font-bold text-slate-500">404</h1>
      <h1 class="text-4xl font-bold text-blue-400">Not Found</h1>
      <div>Go to <a routerLink="/app" class="bg-green-300 p-1.5 rounded hover:bg-green-400">App</a></div>
    </div>
  `,
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
