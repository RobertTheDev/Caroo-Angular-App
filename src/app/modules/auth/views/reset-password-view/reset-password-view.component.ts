import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-reset-password-view',
  templateUrl: './reset-password-view.component.html',
})
export class ResetPasswordViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta('Title', 'Description.', 'Keywords', 'Path');
  }
}
