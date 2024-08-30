import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {

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

  showEditProfile: boolean = false;

  toggleEditProfile() {
    this.showEditProfile = !this.showEditProfile;
  }
}