import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-send-email-verification-token-view',
  templateUrl: './send-email-verification-token-view.component.html',
})
export class SendEmailVerificationTokenViewComponent {
  constructor(metaService: MetaService) {}
}
