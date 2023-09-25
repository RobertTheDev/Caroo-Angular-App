import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-update-email-view',
  templateUrl: './update-email-view.component.html',
})
export class UpdateEmailViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Update Email Address',
      'Description.',
      'Keywords',
      'update-email-address',
    );
  }
}
