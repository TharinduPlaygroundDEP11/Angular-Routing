import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <header class="flex justify-between border-b-2">
      <h1 class="text-3xl font-bold p-2 text-blue-950 text-center">Angular Routing</h1>
      <button class="border border-sky-500 p-2 hover:bg-sky-500 cursor-pointer rounded-md m-2">Logout</button>
    </header>
    <nav class="flex list-none justify-center border-b-2 gap-5">
      <li [class]="classList">HOME</li>
      <li [class]="classList2">MANAGE CUSTOMERS</li>
      <li [class]="'p-2 border cursor-pointer hover:bg-slate-200'">MANAGE ITEMS</li>
    </nav>
    <div class="flex justify-center p-2 m-2">
      <router-outlet />
    </div>
  `,
  styleUrl: './main.component.scss'
})
export class MainComponent {
  classList = ["p-2", "border", "cursor-pointer", "hover:bg-slate-200"];

  classList2 = {
    "p-2":true,
    "cursor-pointer":true,
    "border":true,
    "hover:bg-slate-200":true,
    "hover:bg-amber-200":false
  }
}