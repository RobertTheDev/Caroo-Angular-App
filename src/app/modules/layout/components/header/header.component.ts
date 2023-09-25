import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHeart,
  faMessage,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { User } from '@prisma/client';
import { Observable, of } from 'rxjs';
import companyName from 'src/app/lib/constants/companyName';
import headerLinks from 'src/app/lib/links/headerLinks';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerLinks = headerLinks;
  companyName = companyName;
  faBars = faBars;
  faHeart = faHeart;
  faUser = faUser;
  faMessage = faMessage;
  controlMouseOverActiveName: string | null = null;
  userSignedIn = false;
  user: Observable<User> | null = null;

  // Use the angular form builder.
  constructor(
    private router: Router,
    private authService: AuthService,
    private layoutService: LayoutService,
  ) {}

  ngOnInit() {
    const authenticatedUser = this.authService.getAuthenticatedUser();

    if (authenticatedUser) {
      authenticatedUser.subscribe({
        next: (response) => {
          if (response.data) {
            this.userSignedIn = true;
            this.user = of(response.data); // Assuming you're using rxjs `of` function
          } else {
            this.userSignedIn = false;
            this.user = null;
          }
        },
        error: (error) => {
          console.error(error);
          this.userSignedIn = false;
          this.user = null;
        },
      });
    } else {
      this.user = null;
    }
  }

  handleControlMouseOver(name: string) {
    this.controlMouseOverActiveName = name;
  }

  handleControlMouseOut() {
    this.controlMouseOverActiveName = null;
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
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

  toggleBurgerMenu() {
    this.layoutService.toggleBurgerMenu();
  }

  toggleProfileMenu() {
    this.layoutService.toggleProfileMenu();
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
