import { Component } from '@angular/core';

@Component({
  selector: 'app-upliftingordernow',
  templateUrl: './upliftingordernow.component.html',
  styleUrls: ['./upliftingordernow.component.css']
})
export class UpliftingordernowComponent {
  PopularPro:any=[
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'9000',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'9000',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'9000',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'9000',img:'assets/Product/pizza.png'},
   
  ]
  selectedProduct: any = null; // Holds the product data for the modal

  // Function to open the modal with the selected product's details
  openModal(product: any) {
    this.selectedProduct = product;
  }

  // Function to close the modal
  closeModal() {
    this.selectedProduct = null;
  }
}
