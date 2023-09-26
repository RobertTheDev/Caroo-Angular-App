import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SignedInGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate() {
    this.authService.getAuthenticatedUser().subscribe({
      next: (data) => {
        if (!data) {
          return true;
        }
        this.router.navigateByUrl('/');
        return false;
      },
      error: () => {
        this.router.navigateByUrl('/');
        return false;
      },
    });
  }
}
