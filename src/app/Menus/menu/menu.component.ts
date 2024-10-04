import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  tiles: any = [
    { name: 'Appetizers', img: 'assets/Menu/Group 339040.png' },
    { name: 'Flame Grill Burgers', img: 'assets/Menu/image 9.png' },
    { name: 'Veggie & Plant ', img: 'assets/Menu/image 12.png' },
    { name: 'Sandwich ', img: 'assets/Menu/image 9.png' },
    { name: 'Hot Chicken Entrees', img: 'assets/Menu/image 12.png' },
    { name: 'Beef Entries', img: 'assets/Menu/image 13.png' },

  ]

}
