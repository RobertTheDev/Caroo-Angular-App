import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-edit-car-view',
  templateUrl: './edit-car-view.component.html',
})
export class EditCarViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Edit Car',
      'Description.',
      'Keywords',
      'edit-car',
    );
  }
}
