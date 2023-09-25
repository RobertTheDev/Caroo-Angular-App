import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-verify-email-with-token-view',
  templateUrl: './verify-email-with-token-view.component.html',
})
export class VerifyEmailWithTokenViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Verify Email Address With Token',
      'Description.',
      'Keywords',
    );
  }
}
