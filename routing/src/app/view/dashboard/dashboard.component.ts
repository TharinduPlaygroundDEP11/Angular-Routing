import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1 class="text-2xl shadow-gray-700 font-bold text-amber-800 text-center">Dashboard</h1>
    <img src="https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg?fit=around%7C875:492"
         alt="Dashboard Image">
  `,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
