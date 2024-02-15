import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-items',
  template: `
    <h1 class="text-2xl shadow-gray-700 font-bold text-amber-800 text-center">Manage Items</h1>
    <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx"
         alt="Manage Items Image">
    <p class="text-center mt-4">
      What is Lorem Ipsum?

      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  `,
  styleUrl: './manage-items.component.scss'
})
export class ManageItemsComponent {

}
