import { Component } from '@angular/core';

@Component({
  selector: 'app-info-page-error',
  templateUrl: './info-page-error.component.html',
  styleUrls: ['./info-page-error.component.css'],
})
export class InfoPageErrorComponent {
  reloadPage() {
    window.location.reload();
  }
}
