import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  companyName = 'Caroo';

  footerLinks = [
    {
      path: 'about',
      name: 'About',
    },
    {
      path: 'accessibility-statement',
      name: 'Accessibility Statement',
    },
    {
      path: 'privacy-policy',
      name: 'Privacy Policy',
    },
    {
      path: 'terms-and-conditions',
      name: 'Terms and Conditions',
    },
  ];
}
