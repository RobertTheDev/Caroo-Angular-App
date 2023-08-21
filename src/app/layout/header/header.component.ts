import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headerLinks = [
    {
      path: '',
      name: 'Find Cars',
    },
    {
      path: '',
      name: 'Sell A Car',
    },
    {
      path: '/about',
      name: 'About',
    },
  ];
}
