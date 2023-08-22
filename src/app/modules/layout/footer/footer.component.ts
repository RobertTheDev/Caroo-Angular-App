import { Component } from '@angular/core';
import footerLinks from 'src/app/lib/links/footerLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  companyName = 'Caroo';

  footerLinks = footerLinks;
}
