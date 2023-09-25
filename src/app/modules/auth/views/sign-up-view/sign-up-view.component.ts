import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
})
export class SignUpViewComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMeta('Sign Up', 'Description.', 'Keywords', 'sign-up');
  }
}
