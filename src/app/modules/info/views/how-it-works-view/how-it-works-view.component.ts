import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-how-it-works-view',
  templateUrl: './how-it-works-view.component.html',
})
export class HowItWorksViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta(
      'How It Works',
      'Description.',
      'Keywords',
      'how-it-works',
    );
  }
}
