import { Component } from '@angular/core';
import headerLinks from 'src/app/lib/links/headerLinks';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css'],
})
export class BurgerMenuComponent {
  constructor(private layoutService: LayoutService) {}

  headerLinks = headerLinks;

  get burgerMenuActive(): boolean {
    return this.layoutService.burgerMenuActive;
  }

  toggleBurgerMenu() {
    this.layoutService.toggleBurgerMenu();
  }
}
