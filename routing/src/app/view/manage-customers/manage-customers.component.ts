import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-customers',
  template: `
    <h1 class="text-2xl shadow-gray-700 font-bold text-amber-800 text-center">Manage Customers</h1>
    <img src="https://car-images.bauersecure.com/wp-images/3695/1056x594/maserati-mc20-lead.jpg"
         alt="Manage Customers Image">
    <p class="text-center mt-4">
      What is Lorem Ipsum?

      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  `,
  styleUrl: './manage-customers.component.scss'
})
export class ManageCustomersComponent {

}
