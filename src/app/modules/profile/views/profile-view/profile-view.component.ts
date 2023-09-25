import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
})
export class ProfileViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta('Title', 'Description.', 'Keywords', 'Path');
  }
}
