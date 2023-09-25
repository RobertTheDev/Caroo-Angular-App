import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-saved-cars-view',
  templateUrl: './saved-cars-view.component.html',
})
export class SavedCarsViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'Saved Cars',
      'Description.',
      'Keywords',
      'saved-cars',
    );
  }
}
