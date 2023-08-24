import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-policy-view',
  templateUrl: './cookie-policy-view.component.html',
  styleUrls: ['./cookie-policy-view.component.css'],
})
export class CookiePolicyViewComponent implements OnInit {
  markdownContent: string | null = null;

  ngOnInit(): void {
    this.loadMarkdownContent();
  }

  private async loadMarkdownContent() {
    const response = await fetch('assets/content/cookie-policy.md');
    this.markdownContent = await response.text();
  }
}
