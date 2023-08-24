import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions-view',
  templateUrl: './terms-and-conditions-view.component.html',
  styleUrls: ['./terms-and-conditions-view.component.css'],
})
export class TermsAndConditionsViewComponent implements OnInit {
  markdownContent: string | null = null;

  ngOnInit(): void {
    this.loadMarkdownContent();
  }

  private async loadMarkdownContent() {
    const response = await fetch('assets/content/terms-and-conditions.md');
    this.markdownContent = await response.text();
  }
}
