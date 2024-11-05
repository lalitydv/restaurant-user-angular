import { Component } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  selectedProduct: any = null;  // Holds the product to display in the modal

  // Function to open the modal with product details
  openModal(product: any) {
    this.selectedProduct = product;
  }

  // Function to close the modal
  closeModal() {
    this.selectedProduct = null;
  }
}
