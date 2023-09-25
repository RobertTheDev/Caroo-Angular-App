import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-update-car-request-view',
  templateUrl: './update-car-request-view.component.html',
})
export class UpdateCarRequestViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Update Car Request',
      'Description.',
      'Keywords',
      'Path',
    );
  }
}
