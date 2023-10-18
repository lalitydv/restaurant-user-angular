import { Component } from '@angular/core';

@Component({
  selector: 'app-zoomicon',
  templateUrl: './zoomicon.component.html',
  styleUrls: ['./zoomicon.component.css']
})
export class ZoomiconComponent {
  activeTab = 1;

  switchTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }

  Product:any=[
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/Rectangle 381.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/Rectangle 381.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/Rectangle 381.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/Rectangle 381.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/Rectangle 381.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/Rectangle 381.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/Rectangle 381.png'},
    {name:'Serve with mayo and green chili sauce.',sortname:'Onion Rings',Price:'900',img:'assets/Product/Rectangle 381.png'},

  ]
}
