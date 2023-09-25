import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  burgerMenuActive = false;
  profileMenuActive = false;

  toggleBurgerMenu(): boolean {
    return (this.burgerMenuActive = !this.burgerMenuActive);
  }

  toggleProfileMenu(): boolean {
    return (this.profileMenuActive = !this.burgerMenuActive);
  }
}
