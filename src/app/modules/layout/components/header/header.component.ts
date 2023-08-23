import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
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

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
