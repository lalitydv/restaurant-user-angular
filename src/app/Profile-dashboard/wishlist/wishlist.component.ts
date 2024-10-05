// wishlist.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'] // Add your styles here
})
export class WishlistComponent {
  wishlistItems = [
    {
      name: 'Daily Thali',
      price: '$100.00',
      originalPrice: '$1000.00',
      image: '../../../assets/Product/thali.jpg'
    },
    {
      name: 'Exotic Platter',
      price: '$150.00',
      originalPrice: '$1500.00',
      image: '../../../assets/Product/thali.jpg'
    },
    {
      name: 'Gourmet Feast',
      price: '$200.00',
      originalPrice: '$2000.00',
      image: '../../../assets/Product/thali.jpg'
    }
  ];
}
