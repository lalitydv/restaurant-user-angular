import { Component } from '@angular/core';

import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedProduct: any = null; // Holds the product data for the modal

  // Function to open the modal with the selected product's details
  openModal(product: any) {
    this.selectedProduct = product;
  }

  // Function to close the modal
  closeModal() {
    this.selectedProduct = null;
  }

  ngAfterViewInit() {
    new Swiper('.multiple-slide-carousel', {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 20,
      autoplay: {
        delay: 300,  // Time in milliseconds between slide transitions
        disableOnInteraction: true,  // Continue autoplay after user interaction
      },
      navigation: {
        nextEl: '.multiple-slide-carousel .swiper-button-next',
        prevEl: '.multiple-slide-carousel .swiper-button-prev',
      },
      breakpoints: {
        1920: {
          slidesPerView: 10,
          spaceBetween: 20
        },
        1366: {
          slidesPerView: 8,
          spaceBetween: 20
        },
        1028: {
          slidesPerView: 6,
          spaceBetween: 20
        },
        990: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        550: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        230: {
          slidesPerView: 2,
          spaceBetween: 0
        }
      }
    });
  }


  tiles: any = [
    { name: 'Appetizers', img: 'assets/Menu/Group 339040.png' },
    { name: 'Flame Grill Burgers', img: 'assets/Menu/image 9.png' },
    { name: 'Veggie & Plant ', img: 'assets/Menu/image 12.png' },
    { name: 'Sandwich ', img: 'assets/Menu/image 9.png' },
    { name: 'Hot Chicken Entrees', img: 'assets/Menu/image 12.png' },
    { name: 'Beef Entries', img: 'assets/Menu/image 13.png' },
    { name: 'Appetizers', img: 'assets/Menu/Group 339040.png' },
    { name: 'Flame Grill Burgers', img: 'assets/Menu/image 9.png' },
    { name: 'Veggie & Plant ', img: 'assets/Menu/image 12.png' },
    { name: 'Sandwich ', img: 'assets/Menu/image 9.png' },
    { name: 'Hot Chicken Entrees', img: 'assets/Menu/image 12.png' },



  ]

  Product: any = [
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/Rectangle 381.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/Rectangle 381.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/Rectangle 381.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/Rectangle 381.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/Rectangle 381.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/Rectangle 381.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/Rectangle 381.png' },
    { name: 'Serve with mayo and green chili sauce.', sortname: 'Onion Rings', Price: '900', img: 'assets/Product/Rectangle 381.png' },

  ]

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


}
