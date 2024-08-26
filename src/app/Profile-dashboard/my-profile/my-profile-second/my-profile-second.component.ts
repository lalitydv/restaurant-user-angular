import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile-second',
  templateUrl: './my-profile-second.component.html',
  styleUrls: ['./my-profile-second.component.css']
})
export class MyProfileSecondComponent {
  showEditProfile: boolean = false;

  toggleEditProfile() {
    this.showEditProfile = !this.showEditProfile;
  }
}
