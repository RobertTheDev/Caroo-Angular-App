import { Component } from '@angular/core';
import footerLinks from 'src/app/lib/links/footerLinks';
import socialLinks from 'src/app/lib/links/socialLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  companyName = 'Caroo';

  footerLinks = footerLinks;

  socialLinks = socialLinks;
}
