import { Component } from '@angular/core';
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
}
