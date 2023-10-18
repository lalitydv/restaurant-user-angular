import { Component } from '@angular/core';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent {
  activeTab = 1;

  switchTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }

  PopularPro:any=[
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/pizza.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/pizza.png'},

  ]
  isCartPopupOpen = false;

  openCartPopup() {
    this.isCartPopupOpen = true;
  }

  closeCartPopup() {
    this.isCartPopupOpen = false;
  }
  
}
