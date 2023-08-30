import { Component, OnInit } from '@angular/core';
import { User } from '@prisma/client';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {
  user: Observable<User> | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const authenticatedUser = this.authService.getAuthenticatedUser();

    if (authenticatedUser) {
      authenticatedUser.subscribe({
        next: (response) => {
          if (response.data) {
            this.user = of(response.data); // Assuming you're using rxjs `of` function
          } else {
            this.user = null;
          }
        },
        error: (error) => {
          console.error(error);

          this.user = null;
        },
      });
    } else {
      this.user = null;
    }
  }
}
