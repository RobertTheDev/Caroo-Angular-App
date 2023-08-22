import { Component } from '@angular/core';
import accountSettingsLinks from 'src/lib/links/accountSettingsLinks';

@Component({
  selector: 'app-account-settings-menu',
  templateUrl: './account-settings-menu.component.html',
  styleUrls: ['./account-settings-menu.component.css'],
})
export class AccountSettingsMenuComponent {
  accountSettingsLinks = accountSettingsLinks;
}
