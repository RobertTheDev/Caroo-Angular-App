import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-send-password-reset-page',
  templateUrl: './send-password-reset-page.component.html',
})
export class SendPasswordResetPageComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Forgot Password',
      'Description.',
      'Keywords',
      'forgot-password',
    );
  }
}
