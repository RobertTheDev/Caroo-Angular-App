import { Component, OnInit } from '@angular/core';
import IUser from 'models/user/types/User';
import { MetaService } from 'src/app/services/meta/meta.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent implements OnInit {
  constructor(
    private metaService: MetaService,
    private profileService: ProfileService,
  ) {}

  profile: IUser | null = null;
  loading = true;

  ngOnInit() {
    this.metaService.setMeta('Profile', 'Description.', 'Keywords', 'profile');

    this.profileService.getProfile().subscribe({
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
