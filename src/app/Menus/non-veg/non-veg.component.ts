import { Component } from '@angular/core';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent {
  selectedProduct: any = null; // Holds the product data for the modal

  // Function to open the modal with the selected product's details
  openModal(product: any) {
    this.selectedProduct = product;
  }

  // Function to close the modal
  closeModal() {
    this.selectedProduct = null;
  }
  activeTab = 1;

  switchTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }

  PopularPro: any = [
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/pizza.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/pizza.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/pizza.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/pizza.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/pizza.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/pizza.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/pizza.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/pizza.png' },

  ]
  isCartPopupOpen = false;

  openCartPopup() {
    this.isCartPopupOpen = true;
  }

  closeCartPopup() {
    this.isCartPopupOpen = false;
  }

}
