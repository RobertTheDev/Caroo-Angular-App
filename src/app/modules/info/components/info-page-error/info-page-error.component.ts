import { Component } from '@angular/core';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-page-error',
  templateUrl: './info-page-error.component.html',
})
export class InfoPageErrorComponent {
  faRotateRight = faRotateRight;

  reloadPage() {
    window.location.reload();
  }
}
