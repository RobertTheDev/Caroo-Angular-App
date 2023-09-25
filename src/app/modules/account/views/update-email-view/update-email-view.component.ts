import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-update-email-view',
  templateUrl: './update-email-view.component.html',
})
export class UpdateEmailViewComponent {
  constructor(metaService: MetaService) {}
}
