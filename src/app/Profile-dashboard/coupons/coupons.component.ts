import { Component } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent {
  coupons = [
    { discount: '10% OFF', dateRange: '10 Sep, 2024 to 01 Dec, 2025', minPurchase: '$50.00' },
    { discount: '50% OFF', dateRange: '10 Sep, 2024 to 01 Dec, 2025', minPurchase: '$50.00' },
    { discount: '10% OFF', dateRange: '10 Sep, 2024 to 01 Dec, 2025', minPurchase: '$50.00' },
    { discount: 'Free Delivery', dateRange: '10 Sep, 2024 to 01 Dec, 2025', minPurchase: '$50.00' }
  ];
  referralCode: string = 'N8YAVG3UQJ';
  copyToClipboard() {
    navigator.clipboard.writeText(this.referralCode).then(() => {
      alert('Referral code copied to clipboard!');
    });
  }
}
