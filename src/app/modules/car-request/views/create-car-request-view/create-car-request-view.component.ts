import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-create-car-request-view',
  templateUrl: './create-car-request-view.component.html',
})
export class CreateCarRequestViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Create Car Request',
      'Description.',
      'Keywords',
      'Path',
    );
  }
}
