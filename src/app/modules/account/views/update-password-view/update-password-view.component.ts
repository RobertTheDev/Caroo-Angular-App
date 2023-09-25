import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-update-password-view',
  templateUrl: './update-password-view.component.html',
})
export class UpdatePasswordViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta('Title', 'Description.', 'Keywords', 'Path');
  }
}
