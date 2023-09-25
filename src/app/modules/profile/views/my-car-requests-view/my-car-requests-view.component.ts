import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-my-car-requests-view',
  templateUrl: './my-car-requests-view.component.html',
})
export class MyCarRequestsViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'My Car Requests',
      'Description.',
      'Keywords',
      'my-car-requests',
    );
  }
}
