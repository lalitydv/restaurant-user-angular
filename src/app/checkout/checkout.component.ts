import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private router: Router) {}

  goBack() {
    // Navigate back to home or use history back
    this.router.navigate(['/']); // Adjust the path to your home route
    // Alternatively, you can use window.history.back(); to go to the previous page
  }
}
