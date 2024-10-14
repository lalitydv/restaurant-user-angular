import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  isDropdownOpen = false;
  selectedLanguage = 'Select Language'; // Default placeholder

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language; // Set selected language
    console.log('Selected Language:', language);
    this.isDropdownOpen = false; // Close dropdown after selection
  }
}
