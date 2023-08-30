import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private router: Router,
    private location: Location,
  ) {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  navigateBack(): void {
    this.location.back();
  }
}
