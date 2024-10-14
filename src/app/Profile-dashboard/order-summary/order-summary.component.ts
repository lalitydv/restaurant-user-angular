import { Component } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  // showFirstDiv: boolean = true;
  // showTrackerDiv: boolean = false;
  // showThirdDiv: boolean = false;

  // Toggle to show Tracker div
  // toggleTracker() {
  //   this.showFirstDiv = false;
  //   this.showTrackerDiv = true;
  //   this.showThirdDiv = false;
  // }

  // Toggle to show Third div
  // toggleThirdDiv() {
  //   this.showFirstDiv = false;
  //   this.showTrackerDiv = false;
  //   this.showThirdDiv = true;
  // }

  // Close all divs (if you need this functionality)
  // closeAll() {
  //   this.showFirstDiv = false;
  //   this.showTrackerDiv = false;
  //   this.showThirdDiv = false;
  // }


  showEditProfile: boolean = false;
  showThirdDiv: boolean = false;

  toggleEditProfile() {
    this.showEditProfile = !this.showEditProfile;
    this.showThirdDiv = false; // Hide third div when toggling between first two divs
  }

  toggleThirdDiv() {
    this.showThirdDiv = !this.showThirdDiv;
    this.showEditProfile = false; // Hide second div when toggling third div
  }


  events = [
    {
      sn: '1',
      description: 'Order placed',
      date: new Date('2020-09-20'),

    },
    {
      description: 'Order Confirmed',

      date: new Date('2020-09-22'),
      sn: '2',
    },
    {
      description: 'Preparing Food',

      date: new Date('2020-09-28'),
      sn: '3',
    },
    {
      description: 'Food is on the Way',

      date: new Date('2020-09-30'),
      sn: '4',
    },
    {
      description: 'Delivered',

      date: new Date('2020-10-04'),
      sn: '5',
    },
  ];

  selectedTab: string = 'Seller';
  isChatVisible: boolean = false;
  messages: string[] = ['Hii!'];
  newMessage: string = '';

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.isChatVisible = false;
  }

  showChat() {
    this.isChatVisible = true;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }

  progress: number = 0; // Set initial progress to 0

  // Simulating a real order tracking scenario
  ngOnInit() {
    this.trackOrderProgress();
  }

  // Simulate tracking the order progress
  trackOrderProgress() {
    const interval = setInterval(() => {
      if (this.progress < 80) { // Simulate up to 80% completion
        this.progress += 20; // Increment by 20% every 2 seconds
      } else {
        clearInterval(interval); // Stop when it reaches 80%
      }
    }, 2000); // Update every 2 seconds for demo purposes
  }

}
