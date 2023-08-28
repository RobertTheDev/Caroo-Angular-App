import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHeart,
  faMessage,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import companyName from 'src/app/lib/constants/companyName';
import headerLinks from 'src/app/lib/links/headerLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headerLinks = headerLinks;
  companyName = companyName;
  faBars = faBars;
  faHeart = faHeart;
  faUser = faUser;
  faMessage = faMessage;
  avatarUrl =
    'https://lh3.googleusercontent.com/a/AAcHTtc7om1QDN6eGEuyZGQ4OxXiq8sehpW5JXbhhj0QRZSMBg=s576-c-no';
  controlMouseOverActiveName: string | null = null;
  userSignedIn = false;

  constructor(private router: Router) {}

  handleControlMouseOver(name: string) {
    this.controlMouseOverActiveName = name;
  }

  handleControlMouseOut() {
    this.controlMouseOverActiveName = null;
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  headerControls = [
    {
      icon: faHeart,
      name: 'Saved',
      url: '/saved-cars',
    },
    {
      icon: faMessage,
      name: 'Messages',
      url: '/chat',
    },
    {
      icon: faUser,
      name: 'Profile',
      url: '/profile',
    },
  ];
}
