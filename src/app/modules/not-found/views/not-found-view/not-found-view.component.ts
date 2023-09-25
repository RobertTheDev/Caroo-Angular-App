import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-not-found-view',
  templateUrl: './not-found-view.component.html',
})
export class NotFoundViewComponent implements OnInit {
  constructor(
    private metaService: MetaService,
    private router: Router,
  ) {}

  goHome() {
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
    this.metaService.setMeta(
      '404 - Not Found',
      'Description.',
      'Keywords',
      '404',
    );
  }
}
