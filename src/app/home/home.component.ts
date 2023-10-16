import { Component  } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  tiles:any=[
    {name:'Appetizers',img:'assets/Menu/Group 339040.png'},
    {name:'Flame Grill Burgers',img:'assets/Menu/image 9.png'},
    {name:'Veggie & Plant ',img:'assets/Menu/image 6.png'},
    {name:'Sandwich ',img:'assets/Menu/image 9.png'},
    {name:'Hot Chicken Entrees',img:'assets/Menu/image 12.png'},
    {name:'Beef Entries',img:'assets/Menu/image 13.png'},

  ]
  
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

 
}
