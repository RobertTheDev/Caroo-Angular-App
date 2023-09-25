import { Component, OnInit } from '@angular/core';
import companyName from 'src/app/lib/constants/companyName';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-create-car-view',
  templateUrl: './create-car-view.component.html',
})
export class CreateCarViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  companyName = companyName;

  ngOnInit() {
    this.metaService.setMeta(
      'Sell A Car',
      'Description.',
      'Keywords',
      'sell-a-car',
    );
  }
}
