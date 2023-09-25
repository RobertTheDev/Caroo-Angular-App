import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-seller-view',
  templateUrl: './seller-view.component.html',
})
export class SellerViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta('Title', 'Description.', 'Keywords', 'Path');
  }
}
