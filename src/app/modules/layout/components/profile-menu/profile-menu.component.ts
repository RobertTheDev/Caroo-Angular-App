import { Component } from '@angular/core';
import profileMenuLinks from 'src/app/lib/links/profileMenuLinks';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css'],
})
export class ProfileMenuComponent {
  constructor(private layoutService: LayoutService) {}

  profileMenuLinks = profileMenuLinks;

  get profileMenuActive(): boolean {
    return this.layoutService.profileMenuActive;
  }

  toggleProfileMenu() {
    this.layoutService.toggleProfileMenu();
  }
}
