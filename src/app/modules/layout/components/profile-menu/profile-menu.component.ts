import { Component } from '@angular/core';
import profileMenuLinks from 'src/app/lib/links/profileMenuLinks';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css'],
})
export class ProfileMenuComponent {
  constructor(
    private authService: AuthService,
    private layoutService: LayoutService,
  ) {}

  profileMenuLinks = profileMenuLinks;

  get profileMenuActive(): boolean {
    return this.layoutService.profileMenuActive;
  }

  logout() {
    return this.authService.logOut().subscribe({
      next: (data) => {
        console.log(data);
        window.location.reload();
      },
      error: (error) => console.error(error),
    });
  }

  toggleProfileMenu() {
    this.layoutService.toggleProfileMenu();
  }
}
