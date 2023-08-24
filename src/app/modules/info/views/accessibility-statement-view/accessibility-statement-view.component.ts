import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessibility-statement-view',
  templateUrl: './accessibility-statement-view.component.html',
  styleUrls: ['./accessibility-statement-view.component.css'],
})
export class AccessibilityStatementViewComponent implements OnInit {
  markdownContent: string | null = null;

  ngOnInit(): void {
    this.loadMarkdownContent();
  }

  private async loadMarkdownContent() {
    const response = await fetch('assets/content/accessibility-statement.md');
    this.markdownContent = await response.text();
  }
}
