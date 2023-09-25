import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-edit-profile-view',
  templateUrl: './edit-profile-view.component.html',
})
export class EditProfileViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Edit Profile',
      'Description.',
      'Keywords',
      'edit-profile',
    );
  }
}
