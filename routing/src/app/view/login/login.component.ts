import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form class="flex justify-center items-center h-screen"
          #loginFrm = "ngForm">
      <div class="flex flex-col justify-center items-center" id="box">
        <h1 class="text-2xl font-bold mb-5">Login</h1>
        <h3 class="text-0.5xl font-bold mb-5">Enter your credentials to login...</h3>
        <div class="mb-6 text-center">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
          <input type="text" id="username"
                 #username
                 name="username"
                 ngModel
                 pattern="^[A-Za-z0-9 ]{4,}$"
                 class="text-center border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="Enter your username here..." required/>
        </div>
        <div class="mb-6 text-center">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input type="password" id="password"
                 #password
                 name="password"
                 ngModel
                 minlength="5"
                 class="text-center border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="Enter your password here..." required/>
        </div>
        <button type="button"
                [disabled]="loginFrm.invalid"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-gray-400">
          Login
        </button>
      </div>
    </form>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
