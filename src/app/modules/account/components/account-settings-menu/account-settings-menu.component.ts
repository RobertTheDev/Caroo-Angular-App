import { Component } from '@angular/core';
import accountSettingsLinks from 'src/app/lib/links/accountSettingsLinks';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-account-settings-menu',
  templateUrl: './account-settings-menu.component.html',
  styleUrls: ['./account-settings-menu.component.css'],
})
export class AccountSettingsMenuComponent {
  accountSettingsLinks = accountSettingsLinks;

  constructor(private authService: AuthService) {}

  signOut() {
    return this.authService.logOut().subscribe({
      next: () => {
        console.log('yee');
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
// http://localhost:4401/profile
