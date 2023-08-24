import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy-view',
  templateUrl: './privacy-policy-view.component.html',
  styleUrls: ['./privacy-policy-view.component.css'],
})
export class PrivacyPolicyViewComponent implements OnInit {
  markdownContent: string | null = null;

  ngOnInit(): void {
    this.loadMarkdownContent();
  }

  private async loadMarkdownContent() {
    const response = await fetch('assets/content/privacy-policy.md');
    this.markdownContent = await response.text();
  }
}
