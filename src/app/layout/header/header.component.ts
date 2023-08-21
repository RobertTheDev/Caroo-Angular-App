import { Component } from '@angular/core';
import headerLinks from 'src/lib/links/headerLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headerLinks = headerLinks;
}
