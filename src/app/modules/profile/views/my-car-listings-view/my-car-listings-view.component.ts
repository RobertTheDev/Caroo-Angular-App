import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-my-car-listings-view',
  templateUrl: './my-car-listings-view.component.html',
})
export class MyCarListingsViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'My Car Listings',
      'Description.',
      'Keywords',
      'my-car-listings',
    );
  }
}
