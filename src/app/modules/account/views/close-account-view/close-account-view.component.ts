import { Component } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-close-account-view',
  templateUrl: './close-account-view.component.html',
})
export class CloseAccountViewComponent {
  constructor(metaService: MetaService) {}
}
