import { Component } from '@angular/core';

@Component({
  selector: 'app-loyalty-points',
  templateUrl: './loyalty-points.component.html',
  styleUrls: ['./loyalty-points.component.css']
})
export class LoyaltyPointsComponent {
  
  totalPoints: number = 10; 
  pointsHistory: any[] = []; // Empty array to simulate "No Data Found"
  
}
