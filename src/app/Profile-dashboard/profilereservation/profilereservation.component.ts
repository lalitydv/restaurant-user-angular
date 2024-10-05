import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-profilereservation',
  templateUrl: './profilereservation.component.html',
  styleUrls: ['./profilereservation.component.css'],
  animations: [
    trigger('fadeInOut', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate(300, style({ opacity: 1 })),
        ]),
        transition(':leave', [
            animate(300, style({ opacity: 0 })),
        ]),
    ]),
],
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
