import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent {
  constructor(private router: Router) {}

  goBack() {
    // Navigate back to home or use history back
    this.router.navigate(['/checkout']); // Adjust the path to your home route
    // Alternatively, you can use window.history.back(); to go to the previous page
  }
}
