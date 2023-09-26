import { Component, OnInit } from '@angular/core';
import IUser from 'models/user/types/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent implements OnInit {
  constructor(
    private metaService: MetaService,
    private authService: AuthService,
  ) {}

  profile: IUser | null = null;
  loading = true;

  ngOnInit() {
    this.metaService.setMeta('Profile', 'Description.', 'Keywords', 'profile');

    this.authService.getAuthenticatedUser().subscribe({
      next: (value) => {
        this.profile = value.data;
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
        this.profile = null;
      },
    });
  }
}
