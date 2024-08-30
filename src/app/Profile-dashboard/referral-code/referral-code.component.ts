import { Component } from '@angular/core';

@Component({
  selector: 'app-referral-code',
  templateUrl: './referral-code.component.html',
  styleUrls: ['./referral-code.component.css'],
})
export class ReferralCodeComponent {
  referralCode: string = 'N8YAVG3UQJ';

  copyToClipboard() {
    navigator.clipboard.writeText(this.referralCode).then(() => {
      alert('Referral code copied to clipboard!');
    });
  }
}
