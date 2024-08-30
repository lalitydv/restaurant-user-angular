import { Component } from '@angular/core';

@Component({
  selector: 'app-profilereservation',
  templateUrl: './profilereservation.component.html',
  styleUrls: ['./profilereservation.component.css']
})
export class ProfilereservationComponent {
  reservations = [
    { date: '24 May 2024', people: '190856213', name: 'Sapna Prajapat', tableName: 'front' },
    { date: '24 May 2024', people: '190856213', name: 'Sapna Prajapat', tableName: 'TOp' },
    { date: '24 May 2024', people: '190856213', name: 'Sapna Prajapat', tableName: 'Back' },
    { date: '24 May 2024', people: '190856213', name: 'Sapna Prajapat', tableName: 'COrner' },
  ];

  showEditProfile: boolean = false;

  toggleEditProfile() {
    this.showEditProfile = !this.showEditProfile;
  }
}
